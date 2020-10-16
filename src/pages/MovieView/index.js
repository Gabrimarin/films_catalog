import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {colors} from '../../constants';
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

const Rest = new RestServices();

const stickyHeaderHeight = 80;

const MovieView = () => {
  const {params} = useRoute();
  const [movieData, setMovieData] = useState({});
  const [isPosterVisible, setIsPosterVisible] = useState(false);
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);

  useEffect(() => {
    async function getMovies() {
      const response = await Rest.getMovie(params.id);
      setMovieData(response);
      console.log(response);
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

  return (
    <>
      <ParallaxScrollView
        backgroundColor={'#ffffff00'}
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
              colors.dark + '00',
              colors.dark + '55',
              colors.dark + 'ff',
            ]}
            style={{
              height: '100%',
              justifyContent: 'flex-end',
              padding: 12,
            }}>
            <ViewPosterButton
              name="remove-red-eye"
              size={35}
              color="white"
              onPress={() => setIsPosterVisible(true)}
            />
            <Title color={'white'}>{movieData.original_title}</Title>
            <SubText color={'white'}>
              {movieData?.genres?.[0]?.name || 'LOAD'}
            </SubText>
          </LinearGradient>
        )}>
        <DetailsContainer>
          <FormRow>
            <Label>Overview:</Label>
            <SinopseView expanded={true}>
              <FormText>{movieData.overview}</FormText>
            </SinopseView>
            <ViewMoreIcon
              name="expand-more"
              size={35}
              color="black"
              onPress={() => setIsOverviewExpanded((prev) => !prev)}
            />
          </FormRow>
          <FormRow>
            <Label>Release Year</Label>
            <FormText>{movieData.release_date}</FormText>
          </FormRow>
          <FormRow>
            <TagLine>"{movieData.tagline}"</TagLine>
          </FormRow>
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
    </>
  );
};

export default MovieView;
