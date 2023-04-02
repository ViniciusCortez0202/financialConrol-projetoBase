import React from 'react';
import { Text, View } from 'react-native';
import { Container } from './style';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";

export default function Dashboard({data}) {
    const screenWidth = Dimensions.get("window").width;
    const chartConfig = {
        color: (opacity = 1) => `transparent`,
      };
      
 return (
      <PieChart
        data={data}
        width={screenWidth}
        height={300}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[10, 15]}
        avoidFalseZero
      />
  );
}