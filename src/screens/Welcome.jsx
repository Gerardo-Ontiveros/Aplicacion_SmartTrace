import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#282534', white: '#fff', secondary: '#4B7BE5' };

const slides = [
  {
    id: '1',
    image: require('../assets/image1.png'),
    title: 'Bienvenido',
    subtitle: 'SmartTrace, monitorea y sigue la ruta en tiempo real.',
  },
  {
    id: '2',
    title: 'Sensores',
    subtitle: 'Utilizamos sensores para monitorear la ruta en tiempo real.',
    sensors: [
      {
        name: 'DHT11',
        description: 'Sensor de temperatura y humedad',
        image: require('../assets/dht11.jpg'),
      },
      {
        name: 'BMP180',
        description: 'Sensor de presión atmosférica',
        image: require('../assets/bmp180.jpeg'),
      },
      {
        name: 'TCRT5000',
        description: 'Sensor de seguimiento de línea',
        image: require('../assets/tcrt5000.jpg'),
      },
    ],
  },
  {
    id: '3',
    title: 'Nuestro Equipo',
    team: [
      {
        name: 'Edwin Alfredo Solorza Ochoa',
        role: 'Diseñador mecánico',
        image: require('../assets/edwin.webp'),
      },
      {
        name: 'Jessica Rivera Floriano',
        role: 'Desarrolladora IoT',
        image: require('../assets/jess.webp'),
      },
      {
        name: 'Gerardo Ontiveros Dávila',
        role: 'Desarrollador Móvil',
        image: require('../assets/gera.webp'),
      },
    ],
  },
];

const TeamMember = ({ member }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={member.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{member.name}</Text>
      <Text style={styles.cardSubtitle}>{member.role}</Text>
    </View>
  );
};

const SensorItem = ({ sensor }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={sensor.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{sensor.name}</Text>
      <Text style={styles.cardSubtitle}>{sensor.description}</Text>
    </View>
  );
};

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: 'center', width }}>
      <Text style={styles.title}>{item?.title}</Text>

      {item.id === '3' ? (
        // Vista para el equipo (2 arriba, 1 abajo)
        <View style={styles.gridContainer}>
          <View style={styles.topRow}>
            {item.team.slice(0, 2).map((member, index) => (
              <TeamMember key={`team-${index}`} member={member} />
            ))}
          </View>
          <View style={styles.bottomRow}>
            <TeamMember member={item.team[2]} />
          </View>
        </View>
      ) : item.id === '2' ? (
        // Vista para sensores (2 arriba, 1 abajo)
        <View style={styles.gridContainer}>
          <View style={styles.topRow}>
            {item.sensors.slice(0, 2).map((sensor, index) => (
              <SensorItem key={`sensor-${index}`} sensor={sensor} />
            ))}
          </View>
          <View style={styles.bottomRow}>
            <SensorItem sensor={item.sensors[2]} />
          </View>
        </View>
      ) : (
        // Vista para la primera slide
        <Image
          source={item?.image}
          style={{
            height: '60%',
            width: '90%',
            resizeMode: 'contain',
            borderRadius: 10,
            marginTop: 20,
          }}
        />
      )}

      {item.subtitle && (
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      )}
    </View>
  );
};

const Welcome = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex < slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && {
                  backgroundColor: COLORS.secondary,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          {currentSlideIndex === slides.length - 1 ? (
            <TouchableOpacity
              style={styles.getStartedBtn}
              onPress={() => navigation.replace('Main')}
            >
              <Text style={styles.btnText}>COMENZAR</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.navigationButtons}>
              <TouchableOpacity style={[styles.btn, styles.skipBtn]} onPress={skip}>
                <Text style={[styles.btnText, styles.skipText]}>SALTAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.nextBtn]} onPress={goToNextSlide}>
                <Text style={styles.btnText}>SIGUIENTE</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Estilos generales
  title: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleContainer: {
    paddingHorizontal: 40,
    marginTop: 20,
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 23,
  },

  // Estilos para el grid (equipo y sensores)
  gridContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  bottomRow: {
    width: '100%',
    alignItems: 'center',
  },

  // Estilos para las tarjetas (miembros y sensores)
  cardContainer: {
    width: width * 0.4,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 5,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.secondary,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  cardTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  cardSubtitle: {
    color: '#ccc',
    fontSize: 13,
    textAlign: 'center',
  },

  // Estilos del footer
  footer: {
    height: height * 0.2,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicator: {
    height: 4,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  buttonContainer: {
    marginBottom: 30,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedBtn: {
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
  },
  skipBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.white,
    marginRight: 10,
  },
  nextBtn: {
    backgroundColor: COLORS.secondary,
    marginLeft: 10,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.white,
  },
  skipText: {
    color: COLORS.white,
  },
});

export default Welcome;
