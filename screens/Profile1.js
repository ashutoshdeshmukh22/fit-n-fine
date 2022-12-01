import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Profile = () => {
  return (
    <View style={styles.profileView}>
      <View style={styles.headerView}>
        <View style={styles.backNavsView}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.arrowLeft2}
            resizeMode="cover"
            source={require("../assets/arrow--left-2.png")}
          />
        </View>
        <Image
          style={styles.detailNavsIcon}
          resizeMode="cover"
          source={require("../assets/detailnavs.png")}
        />
        <Text style={styles.profileText}>Profile</Text>
      </View>
      <View style={styles.profileSectionView}>
        <View style={styles.personalDataView}>
          <View style={styles.heightCardView}>
            <View style={styles.bgView}>
              <View style={styles.rectangleView1} />
            </View>
            <View style={styles.heightTextView}>
              <Text style={styles.cmText}>180cm</Text>
              <Text style={styles.heightText}>Height</Text>
            </View>
          </View>
          <View style={styles.weightCardView}>
            <View style={styles.bgView1}>
              <View style={styles.rectangleView2} />
            </View>
            <View style={styles.weightTextView}>
              <Text style={styles.kgText}>65kg</Text>
              <Text style={styles.weightText}>Weight</Text>
            </View>
          </View>
          <View style={styles.ageCardView}>
            <View style={styles.bgView2}>
              <View style={styles.rectangleView3} />
            </View>
            <View style={styles.ageTextView}>
              <Text style={styles.yoText}>22yo</Text>
              <Text style={styles.ageText}>Age</Text>
            </View>
          </View>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.ashutoshDeshmukhText}>Ashutosh Deshmukh</Text>
          <Text style={styles.loseAFatProgram}>Lose a Fat Program</Text>
        </View>
        <Image
          style={styles.latestPicIcon}
          resizeMode="cover"
          source={require("../assets/latestpic.png")}
        />
        <View style={styles.buttonView}>
          <View style={styles.bgView3}>
            <LinearGradient
              style={styles.rectangleLinearGradient}
              locations={[0, 1]}
              colors={["#92a3fd", "#9dceff"]}
              useAngle={true}
              angle={-85.58}
            />
          </View>
          <View style={styles.textView}>
            <Text style={styles.editText}>Edit</Text>
          </View>
        </View>
      </View>
      <View style={styles.dataCardSectionView}>
        <View style={styles.notificationSectionView}>
          <View style={styles.bgView4}>
            <View style={styles.rectangleView4} />
          </View>
          <View style={styles.titleView}>
            <Text style={styles.notificationText}>Notification</Text>
          </View>
          <View style={styles.popupNotificationView}>
            <View style={styles.textView1}>
              <Text style={styles.popUpNotificationText}>
                Pop-up Notification
              </Text>
            </View>
            <View style={styles.toggleView}>
              <LinearGradient
                style={styles.rectangleLinearGradient1}
                locations={[0, 1]}
                colors={["#c58bf2", "#eea4ce"]}
                useAngle={true}
                angle={-85.58}
              />
              <Image
                style={styles.ellipseIcon}
                resizeMode="cover"
                source={require("../assets/ellipse-170.png")}
              />
            </View>
            <Image
              style={styles.iconNotif}
              resizeMode="cover"
              source={require("../assets/iconnotif.png")}
            />
          </View>
        </View>
        <View style={styles.otherSectionView}>
          <View style={styles.bgView5}>
            <View style={styles.rectangleView5} />
          </View>
          <View style={styles.titleView1}>
            <Text style={styles.otherText}>Other</Text>
          </View>
          <View style={styles.contactUsView}>
            <View style={styles.textView2}>
              <Text style={styles.contactUsText}>Contact Us</Text>
            </View>
            <Image
              style={styles.iconArrow}
              resizeMode="cover"
              source={require("../assets/iconarrow.png")}
            />
            <Image
              style={styles.iconMessage}
              resizeMode="cover"
              source={require("../assets/iconmessage.png")}
            />
          </View>
          <View style={styles.settingView}>
            <View style={styles.textView3}>
              <Text style={styles.settingsText}>Settings</Text>
            </View>
            <Image
              style={styles.iconArrow1}
              resizeMode="cover"
              source={require("../assets/iconarrow1.png")}
            />
            <Image
              style={styles.iconSetting}
              resizeMode="cover"
              source={require("../assets/iconsetting.png")}
            />
          </View>
          <View style={styles.privacyPolicyView}>
            <View style={styles.textView4}>
              <Text style={styles.privacyPolicyText}>Privacy Policy</Text>
            </View>
            <Image
              style={styles.iconArrow2}
              resizeMode="cover"
              source={require("../assets/iconarrow2.png")}
            />
            <Image
              style={styles.iconPrivacy}
              resizeMode="cover"
              source={require("../assets/iconprivacy.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.navbarView}>
        <Image
          style={styles.navbarBgIcon}
          resizeMode="cover"
          source={require("../assets/navbarbg1.png")}
        />
        <Image
          style={styles.dietplanIcon}
          resizeMode="cover"
          source={require("../assets/dietplan.png")}
        />
        <View style={styles.iCONView}>
          <View style={styles.searchView}>
            <LinearGradient
              style={styles.ellipseLinearGradient}
              locations={[0, 1]}
              colors={["#92a3fd", "#9dceff"]}
              useAngle={true}
              angle={-85.58}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/ellipse-382.png")}
              />
            </LinearGradient>
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/icon-1.png")}
            />
          </View>
        </View>
        <Image
          style={styles.homeActiveIcon}
          resizeMode="cover"
          source={require("../assets/homeactive.png")}
        />
        <View style={styles.stepCounterView}>
          <Image
            style={styles.runner2Icon}
            resizeMode="cover"
            source={require("../assets/runner-2.png")}
          />
        </View>
        <Image
          style={styles.profileIcon}
          resizeMode="cover"
          source={require("../assets/profile.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#f7f8f8",
    width: 32,
    height: 32,
  },
  arrowLeft2: {
    position: "absolute",
    height: "37.23%",
    width: "20.47%",
    top: "32.5%",
    right: "40.78%",
    bottom: "30.27%",
    left: "38.75%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  backNavsView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 32,
    height: 32,
  },
  detailNavsIcon: {
    position: "absolute",
    height: "100%",
    width: "9.98%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "90.02%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  profileText: {
    position: "absolute",
    top: 4,
    left: 159,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#1d1617",
    textAlign: "left",
  },
  headerView: {
    position: "absolute",
    top: 40,
    left: 30,
    width: 367.69,
    height: 36.73,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(29, 22, 23, 0.07)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    width: 109.78,
    height: 75.11,
  },
  bgView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 109.78,
    height: 75.11,
  },
  cmText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: "Poppins",
    textAlign: "left",
    width: 53.16,
    height: 24.27,
  },
  heightText: {
    position: "absolute",
    top: 30.04,
    left: 3.47,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Poppins",
    color: "#7b6f72",
    textAlign: "left",
    width: 45.07,
    height: 20.8,
  },
  heightTextView: {
    position: "absolute",
    top: 12.71,
    left: 27.73,
    width: 53.16,
    height: 50.84,
  },
  heightCardView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 109.78,
    height: 75.11,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(29, 22, 23, 0.07)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    width: 109.78,
    height: 75.11,
  },
  bgView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 109.78,
    height: 75.11,
  },
  kgText: {
    position: "absolute",
    top: 0,
    left: 3.47,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: "Poppins",
    textAlign: "left",
    width: 41.6,
    height: 24.27,
  },
  weightText: {
    position: "absolute",
    top: 30.04,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Poppins",
    color: "#7b6f72",
    textAlign: "left",
    width: 49.69,
    height: 20.8,
  },
  weightTextView: {
    position: "absolute",
    top: 12.71,
    left: 30.04,
    width: 49.69,
    height: 50.84,
  },
  weightCardView: {
    position: "absolute",
    top: 0,
    left: 127.11,
    width: 109.78,
    height: 75.11,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(29, 22, 23, 0.07)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    width: 109.78,
    height: 75.11,
  },
  bgView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 109.78,
    height: 75.11,
  },
  yoText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: "Poppins",
    textAlign: "left",
    width: 39.29,
    height: 24.27,
  },
  ageText: {
    position: "absolute",
    top: 30.04,
    left: 5.78,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Poppins",
    color: "#7b6f72",
    textAlign: "left",
    width: 27.73,
    height: 20.8,
  },
  ageTextView: {
    position: "absolute",
    top: 12.71,
    left: 34.67,
    width: 39.29,
    height: 50.84,
  },
  ageCardView: {
    position: "absolute",
    top: 0,
    left: 254.22,
    width: 109.78,
    height: 75.11,
  },
  personalDataView: {
    position: "absolute",
    top: 80.89,
    left: 0,
    width: 364,
    height: 75.11,
  },
  ashutoshDeshmukhText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1d1617",
    textAlign: "left",
    width: 173,
    height: 24,
  },
  loseAFatProgram: {
    position: "absolute",
    top: 30.04,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Poppins",
    color: "#7b6f72",
    textAlign: "left",
    width: 132.89,
    height: 20.8,
  },
  nameView: {
    position: "absolute",
    top: 7,
    left: 81,
    width: 173,
    height: 50.84,
  },
  latestPicIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 63.56,
    height: 63.56,
  },
  rectangleLinearGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 99,
    width: 95.91,
    height: 34.67,
    backgroundColor: "transparent",
  },
  bgView3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 95.91,
    height: 34.67,
  },
  editText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
    width: 26.58,
    height: 20.8,
  },
  textView: {
    position: "absolute",
    top: 6.93,
    left: 34.67,
    width: 26.58,
    height: 20.8,
  },
  buttonView: {
    position: "absolute",
    top: 11.56,
    left: 268.09,
    width: 95.91,
    height: 34.67,
  },
  profileSectionView: {
    position: "absolute",
    top: 107,
    left: 30,
    width: 364,
    height: 156,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(29, 22, 23, 0.07)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    width: 368,
    height: 115.66,
  },
  bgView4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 368,
    height: 115.66,
  },
  notificationText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#1d1617",
    textAlign: "left",
    width: 110.98,
    height: 28.04,
  },
  titleView: {
    position: "absolute",
    top: 23.37,
    left: 23.37,
    width: 110.98,
    height: 28.04,
  },
  popUpNotificationText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Poppins",
    color: "#7b6f72",
    textAlign: "left",
    width: 136.69,
    height: 21.03,
  },
  textView1: {
    position: "absolute",
    top: 1.17,
    left: 35.05,
    width: 136.69,
    height: 21.03,
  },
  rectangleLinearGradient1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 99,
    width: 42.06,
    height: 21.03,
    backgroundColor: "transparent",
  },
  ellipseIcon: {
    position: "absolute",
    top: 3.5,
    left: 24.53,
    width: 14.02,
    height: 14.02,
    backgroundColor: "#fff",
  },
  toggleView: {
    position: "absolute",
    top: 1.17,
    left: 285.05,
    width: 42.06,
    height: 21.03,
  },
  iconNotif: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 23.37,
    height: 23.37,
  },
  popupNotificationView: {
    position: "absolute",
    top: 68.93,
    left: 23.37,
    width: 327.11,
    height: 23.37,
  },
  notificationSectionView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 368,
    height: 115.66,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(29, 22, 23, 0.07)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    width: 368,
    height: 185.75,
  },
  bgView5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 368,
    height: 185.75,
  },
  otherText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#1d1617",
    textAlign: "left",
    width: 53.74,
    height: 28.04,
  },
  titleView1: {
    position: "absolute",
    top: 23.36,
    left: 23.37,
    width: 53.74,
    height: 28.04,
  },
  contactUsText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Poppins",
    color: "#7b6f72",
    textAlign: "left",
    width: 78.27,
    height: 21.03,
  },
  textView2: {
    position: "absolute",
    top: 1.17,
    left: 35.05,
    width: 78.27,
    height: 21.03,
  },
  iconArrow: {
    position: "absolute",
    top: 1.17,
    left: 306.08,
    width: 21.03,
    height: 21.03,
  },
  iconMessage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 23.37,
    height: 23.37,
  },
  contactUsView: {
    position: "absolute",
    top: 68.93,
    left: 23.37,
    width: 327.11,
    height: 23.37,
  },
  settingsText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Poppins",
    color: "#7b6f72",
    textAlign: "left",
    width: 57.24,
    height: 21.03,
  },
  textView3: {
    position: "absolute",
    top: 1.17,
    left: 35.05,
    width: 57.24,
    height: 21.03,
  },
  iconArrow1: {
    position: "absolute",
    top: 1.17,
    left: 306.08,
    width: 21.03,
    height: 21.03,
  },
  iconSetting: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 23.37,
    height: 23.37,
  },
  settingView: {
    position: "absolute",
    top: 139.02,
    left: 23.37,
    width: 327.11,
    height: 23.37,
  },
  privacyPolicyText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Poppins",
    color: "#7b6f72",
    textAlign: "left",
    width: 95.8,
    height: 21.03,
  },
  textView4: {
    position: "absolute",
    top: 2.34,
    left: 35.05,
    width: 95.8,
    height: 21.03,
  },
  iconArrow2: {
    position: "absolute",
    top: 2.34,
    left: 306.08,
    width: 21.03,
    height: 21.03,
  },
  iconPrivacy: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 23.37,
    height: 23.37,
  },
  privacyPolicyView: {
    position: "absolute",
    top: 102.81,
    left: 23.37,
    width: 327.11,
    height: 23.37,
  },
  otherSectionView: {
    position: "absolute",
    top: 133.18,
    left: 0,
    width: 368,
    height: 185.75,
  },
  dataCardSectionView: {
    position: "absolute",
    top: 293,
    left: 31,
    width: 368,
    height: 318.93,
  },
  navbarBgIcon: {
    position: "absolute",
    height: "117.73%",
    width: "100%",
    top: "-17.73%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  dietplanIcon: {
    position: "absolute",
    height: "26.67%",
    width: "6.4%",
    top: "43.27%",
    right: "25.08%",
    bottom: "30.06%",
    left: "68.52%",
    borderRadius: 10,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    backgroundColor: "transparent",
  },
  ellipseLinearGradient: {
    position: "absolute",
    left: "-29.14%",
    top: "-10.91%",
    right: "-27.97%",
    bottom: "-43.64%",
    width: "157.11%",
    height: "154.55%",
  },
  icon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 72,
    height: 73,
  },
  searchView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  iCONView: {
    position: "absolute",
    height: "70.51%",
    width: "16.67%",
    top: "-3.85%",
    right: "41.44%",
    bottom: "33.33%",
    left: "41.9%",
  },
  homeActiveIcon: {
    position: "absolute",
    height: "34.44%",
    width: "6.4%",
    top: "42.22%",
    right: "85.6%",
    bottom: "23.33%",
    left: "8%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  runner2Icon: {
    position: "absolute",
    height: "75.72%",
    width: "75.95%",
    top: "13.79%",
    right: "13.7%",
    bottom: "10.49%",
    left: "10.34%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  stepCounterView: {
    position: "absolute",
    height: "27.88%",
    width: "6.71%",
    top: "44.23%",
    right: "68.98%",
    bottom: "27.88%",
    left: "24.31%",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#d2d2d2",
    borderWidth: 1,
  },
  profileIcon: {
    position: "absolute",
    height: "26.67%",
    width: "6.4%",
    top: "42.22%",
    right: "8%",
    bottom: "31.11%",
    left: "85.6%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  navbarView: {
    position: "absolute",
    top: 828,
    left: 0,
    shadowColor: "rgba(29, 22, 23, 0.07)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    width: 432,
    height: 104,
  },
  profileView: {
    position: "relative",
    borderRadius: 40,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Profile;
