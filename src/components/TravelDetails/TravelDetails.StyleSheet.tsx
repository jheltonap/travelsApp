import { StyleSheet } from 'react-native'

const TravelDetailsStyleSheet = StyleSheet.create({
    travelDetailsView: { 
        backgroundColor: '#fff',
        height: 700,
        width: '90%',
        position: 'absolute',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 3,
        borderColor: '#DDD',
        borderStyle: 'solid',
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 20,
        padding: 20 
    },
    card: {},
    cardViewTitle: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 18 
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#707070', 
    },
    cardDetailsContentView: { 
        flexDirection: 'row',
        alignContent: 'center'
    },
    badgeStyleStatus: { 
        position: 'relative', 
        top: 3, 
        height: 16,
        width: 16, 
        borderRadius: 10, 
        marginRight: 10 
    },
    cardSubTitleView: { 
        flexDirection: 'row', 
        alignContent: 'center', 
        justifyContent: 'flex-start',
        marginBottom: 18 
    },
    cardSubTitle: { 
        marginLeft: 10, 
        fontSize: 18 ,
        fontWeight: 'bold',
        color: '#707070', 
    },
    dividerStyle: { 
        marginVertical: 21,
    },
    imagePointDestinationsView: { 
        flexDirection: 'row', 
    },
    imagePointDestinations: { 
        height: 16, 
        width: 16, 
        marginRight: 10, 
        top: 4
    },
    cardDetailsDatesTitle: { 
        fontWeight: 'bold',
        fontSize: 16,
    },
    cardDetailsContentText: { 
        fontSize: 16 ,
    },
    lineDashed: {
        height: 30,
        borderRadius: 1,
        width: 1,
        borderStyle: 'dashed',
        borderWidth: 1,
        marginLeft: 7,
        borderColor: 'rgba(161,155,183,1)',
    },
});

export default TravelDetailsStyleSheet;