import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';

import { fieldMapping, sectionFourKeys, sectionOneKeys, sectionThreeKeys, sectionTwoKeys } from '../../constants';

import { isObject } from '../../helpers';

import RobotLight from './fonts/Roboto-Light.ttf';
import RobotMedium from './fonts/Roboto-Medium.ttf';

import OschadStamp from './images/oschad.png';
import PrivatStamp from './images/privat.png';
import PumbStamp from './images/pumb.png';
import TasStamp from './images/tas.png';

Font.register({
  family: 'Roboto',
  fonts: [{ src: RobotLight }, { src: RobotMedium, fontWeight: 'bold' }],
});

const mapStampToBank = {
  oschad: OschadStamp,
  privat: PrivatStamp,
  pumb: PumbStamp,
  tas: TasStamp,
};

const styles = StyleSheet.create({
  title: {
    display: 'block',
    marginBottom: 10,
    fontSize: 16,
  },
  subtitle: {
    display: 'block',
    marginBottom: 5,
    fontSize: 12,
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableCell: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    padding: 2,
    border: 1,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#d0d4dc',
    color: '#000',
    fontSize: 10,
  },
  fieldLabel: {
    fontWeight: 'bold',
  },

  stampImage: {
    display: 'block',
    maxWidth: '5cm',
  },
  page: {
    display: 'block',
    backgroundColor: '#fff',
    padding: 20,
    fontFamily: 'Roboto',
  },
});

const Table = ({ children }) => <View style={styles.table}>{children}</View>;
const TableRow = ({ children }) => <View style={styles.tableRow}>{children}</View>;

export const PDFView = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>
          {fieldMapping.checkNumber}
          {data.checkNumber}
        </Text>
        <Table>
          {Object.entries(data)
            .filter(([field]) => sectionOneKeys.includes(field))
            .map(([field, value], index) => {
              const val = isObject(value) ? 'test' : value;
              return (
                <TableRow key={index}>
                  <View style={styles.tableCell}>
                    <Text style={styles.fieldLabel}>{fieldMapping[field]}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text>{val}</Text>
                  </View>
                </TableRow>
              );
            })}
        </Table>

        <Text style={styles.subtitle}>Відправник</Text>
        <Table>
          {Object.entries(data)
            .filter(([field]) => sectionTwoKeys.includes(field))
            .map(([field, value], index) => {
              const val = isObject(value) ? 'test' : value;
              return (
                <TableRow key={index}>
                  <View style={styles.tableCell}>
                    <Text style={styles.fieldLabel}>{fieldMapping[field]}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text>{val}</Text>
                  </View>
                </TableRow>
              );
            })}
        </Table>

        <Text style={styles.subtitle}>Одержувач</Text>

        <Table>
          {Object.entries(data)
            .filter(([field]) => sectionThreeKeys.includes(field))
            .map(([field, value], index) => {
              const val = isObject(value) ? 'test' : value;
              return (
                <TableRow key={index}>
                  <View style={styles.tableCell}>
                    <Text style={styles.fieldLabel}>{fieldMapping[field]}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text>{val}</Text>
                  </View>
                </TableRow>
              );
            })}
        </Table>

        <Table>
          {Object.entries(data)
            .filter(([field]) => sectionFourKeys.includes(field))
            .map(([field, value], index) => {
              const val = isObject(value) ? 'test' : value;
              return (
                <TableRow key={index}>
                  <View style={styles.tableCell}>
                    <Text style={styles.fieldLabel}>{fieldMapping[field]}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text>{val}</Text>
                  </View>
                </TableRow>
              );
            })}
        </Table>

        <Table>
          <TableRow>
            <View style={styles.tableCell}>
              <Text style={styles.fieldLabel}>{fieldMapping.paymentCreatedAt}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{data.paymentCreatedAt}</Text>
            </View>
          </TableRow>
        </Table>

        <Image style={styles.stampImage} src={mapStampToBank[data.bank]} />
      </Page>
    </Document>
  );
};
