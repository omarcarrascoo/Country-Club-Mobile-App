import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import {
  Block,
  Checkbox,
  Text,
  theme
} from 'galio-framework';

import { Button, Icon, Input } from '../components';
import { ClubemberTheme } from '../constants';

const { width, height } = Dimensions.get('screen');

class Register extends React.Component {
  render() {
    return (
      <Block flex middle>
        <ImageBackground
          source={{
            uri: 'https://loveshayariimages.in/wp-content/uploads/2022/12/dark-green-android-wallpaper.jpg'
          }}
          style={{ width, height, zIndex: 1 }}
        >
          <Block safe flex middle>
            <Block style={styles.registerContainer}>
              <Block
                flex={0.25}
                middle
                style={styles.socialConnect}
              >
                <Text color="#8898AA" size={12}>
                  Sign up with
                </Text>
                <Block
                  row
                  style={{ marginTop: theme.SIZES.BASE }}
                >
                  <Button
                    style={{
                      ...styles.socialButtons,
                      marginRight: 30
                    }}
                  >
                    <Block row>
                      <Icon
                        name="logo-github"
                        family="Ionicon"
                        size={14}
                        color={'black'}
                        style={{
                          marginTop: 2,
                          marginRight: 5
                        }}
                      />
                      <Text
                        style={styles.socialTextButtons}
                      >
                        GITHUB
                      </Text>
                    </Block>
                  </Button>
                  <Button style={styles.socialButtons}>
                    <Block row>
                      <Icon
                        name="logo-google"
                        family="Ionicon"
                        size={14}
                        color={'black'}
                        style={{
                          marginTop: 2,
                          marginRight: 5
                        }}
                      />
                      <Text
                        style={styles.socialTextButtons}
                      >
                        GOOGLE
                      </Text>
                    </Block>
                  </Button>
                </Block>
              </Block>
              <Block flex>
                <Block flex={0.17} middle>
                  <Text color="#8898AA" size={12}>
                    Or sign up the classic way
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block
                      width={width * 0.8}
                      style={{ marginBottom: 15 }}
                    >
                      <Input
                        borderless
                        placeholder="Name"
                        iconContent={
                          <Icon
                            size={16}
                            color={
                              ClubemberTheme.COLORS.ICON
                            }
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block
                      width={width * 0.8}
                      style={{ marginBottom: 15 }}
                    >
                      <Input
                        borderless
                        placeholder="Email"
                        iconContent={
                          <Icon
                            size={16}
                            color={
                              ClubemberTheme.COLORS.ICON
                            }
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Password"
                        iconContent={
                          <Icon
                            size={16}
                            color={
                              ClubemberTheme.COLORS.ICON
                            }
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                      <Block
                        row
                        style={styles.passwordCheck}
                      >
                        <Text
                          size={12}
                          color={
                            ClubemberTheme.COLORS.MUTED
                          }
                        >
                          password strength:
                        </Text>
                        <Text
                          bold
                          size={12}
                          color={
                            ClubemberTheme.COLORS.SUCCESS
                          }
                        >
                          {' '}
                          strong
                        </Text>
                      </Block>
                    </Block>
                    <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={
                          ClubemberTheme.COLORS.PRIMARY
                        }
                        label="I agree with the"
                      />
                      <Button
                        style={{ width: 100 }}
                        color="transparent"
                        textStyle={{
                          color:
                            ClubemberTheme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                        Privacy Policy
                      </Button>
                    </Block>
                    <Block middle>
                      <Button
                        color="primary"
                        style={styles.createButton}
                      >
                        <Text
                          bold
                          size={14}
                          color={
                            ClubemberTheme.COLORS.WHITE
                          }
                        >
                          CREATE ACCOUNT
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.875,
    backgroundColor: '#F4F5F7',
    borderRadius: 4,
    shadowColor: ClubemberTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden'
  },
  socialConnect: {
    backgroundColor: ClubemberTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#8898AA'
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    shadowColor: ClubemberTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: ClubemberTheme.COLORS.PRIMARY,
    fontWeight: '800',
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default Register;
