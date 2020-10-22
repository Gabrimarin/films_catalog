import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {HEADER_HEIGHT} from '../../constants';
import {GET_POSTER_PATH} from '../../constants/routes';
import RestServices from '../../services/api';
import ImageView from 'react-native-image-view';
import {
  Poster,
  ViewPosterButton,
  Title,
  SubText,
  DetailsContainer,
  StickyHeader,
  FormText,
  SinopseView,
  FormRow,
  Label,
  ViewMoreIcon,
  TagLine,
} from './styles';
import {Dimensions} from 'react-native';
import {AccessibilityOptions, Header, LoadingComponent} from '../../components';
import {withTheme} from 'styled-components';
const Rest = new RestServices();

const stickyHeaderHeight = 80;

const MovieView = ({theme}) => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const [movieData, setMovieData] = useState({});
  const [isPosterVisible, setIsPosterVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [accessibilityModal, setAccessibilityModal] = useState(false);

  useEffect(() => {
    async function getMovies() {
      const response = await Rest.getMovie(params.id);
      setMovieData(response);
      setLoading(false);
    }
    getMovies();
  }, []);

  const getGenresText = (genresData) => {
    let genresString = '';
    genresData.forEach((genre, i) => {
      genresString += genre.name;
      if (i !== genresData.length - 1) {
        genresString += '/';
      }
    });
    return genresString;
  };

  return loading ? (
    <LoadingComponent />
  ) : (
    <>
      <Header
        onBackPress={() => navigation.goBack()}
        onAccessibilityPress={() => setAccessibilityModal(true)}
      />
      <ParallaxScrollView
        style={{backgroundColor: '#000', flex: 1}}
        backgroundColor={'#00000000'}
        contentBackgroundColor={theme.theme.PRIMARY_BACKGROUND_COLOR}
        renderBackground={() => (
          <Poster
            source={{uri: GET_POSTER_PATH(movieData.poster_path)}}
            resizeMode="cover"
          />
        )}
        renderStickyHeader={() => (
          <StickyHeader height={stickyHeaderHeight}>
            <Title numberOfLines={1}>{movieData.original_title}</Title>
            <SubText>
              {movieData?.genres?.[0]?.name && getGenresText(movieData.genres)}
            </SubText>
          </StickyHeader>
        )}
        stickyHeaderHeight={stickyHeaderHeight}
        parallaxHeaderHeight={400}
        renderForeground={() => (
          <LinearGradient
            colors={[
              theme.theme.SECONDARY_TEXT_BACKGROUND_COLOR + '00',
              theme.theme.SECONDARY_TEXT_BACKGROUND_COLOR + 'ff',
            ]}
            style={{
              height: '100%',
              justifyContent: 'flex-end',
              padding: 12,
            }}>
            <ViewPosterButton onPress={() => setIsPosterVisible(true)} />
            <Title color={'white'}>{movieData.original_title}</Title>
            <SubText color={'white'}>
              {movieData?.genres?.[0]?.name && getGenresText(movieData.genres)}
            </SubText>
          </LinearGradient>
        )}>
        <DetailsContainer>
          <FormRow>
            <Label>Overview:</Label>
            <SinopseView expanded={true}>
              <FormText expanded={true}>{movieData.overview}</FormText>
            </SinopseView>
          </FormRow>
          <FormRow>
            <Label>Release Date</Label>
            <FormText>{movieData.release_date.split('-').join('/')}</FormText>
          </FormRow>
          {movieData.tagline.length > 0 && (
            <FormRow accessibilityLabel={`Movie Tagline: ${movieData.tagline}`}>
              <TagLine>{`"${movieData.tagline}"`}</TagLine>
            </FormRow>
          )}
        </DetailsContainer>
      </ParallaxScrollView>
      <ImageView
        images={[
          {
            source: {
              uri: GET_POSTER_PATH(movieData.poster_path),
            },
            title: 'POSTER',
            width: Dimensions.get('window').width,
          },
        ]}
        imageIndex={0}
        animationType="fade"
        isVisible={isPosterVisible}
        onClose={() => setIsPosterVisible(false)}
      />
      <AccessibilityOptions
        isVisible={accessibilityModal}
        onClose={() => setAccessibilityModal(false)}
      />
    </>
  );
};

export default withTheme(MovieView);
