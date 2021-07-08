import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Input, Button } from 'react-native-elements';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AddTravelDateStyleSheet } from "./AddTravelDate.StyleSheet";
import { format } from 'date-fns';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function AddTravelDate() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [datePicker, setDatePicker] = useState<Date>();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDatePicker(date);
    hideDatePicker();
  };

  return (
    <View style={AddTravelDateStyleSheet.container}>
      <TouchableOpacity onPress={showDatePicker} >
        <Input
          leftIcon={{ type: 'material-community', name: 'calendar' }}
          value={typeof (datePicker) !== 'undefined' ? format(datePicker, 'dd/MM/yyyy HH:mm') : undefined}
          onTouchStart={showDatePicker}
          placeholder='Data de partida'
          editable={false}
        />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        date={datePicker}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Button
        title="Confirmar"
        buttonStyle={{ backgroundColor: '#2F9E41', borderRadius: 5 }}
        onPress={showDatePicker} />

    </View>
  );
};



const GOOGLE_MAPS_APIKEY = 'AIzaSyAn8_C1R0cOkceR1r-VMK5XqzVU58o9Vvs';
