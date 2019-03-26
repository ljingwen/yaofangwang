/*
Navicat MySQL Data Transfer

Source Server         : h51812
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : yaofangwang

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-03-26 17:15:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `spec` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `price` float(10,2) DEFAULT NULL,
  `good_code` float(20,0) DEFAULT NULL,
  `offer_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '盐酸舍曲林片', '规格：50mg*14片/', 'list_1.jpg', '辉瑞制药有限公司', '73.50', '113754', '国药准字H10980141');
INSERT INTO `list` VALUES ('2', '盐酸帕罗西汀片', '规格：20mg*10片/', 'list_2.jpg', '中美天津史克制药有限公司', '77.00', '113755', '国药准字H10980142');
INSERT INTO `list` VALUES ('3', '马来酸氟伏沙明片(兰释)', '规格：50mg*30片/', 'list_3.jpg', '荷兰Solvay Pharmaceuticals', '72.60', '113756', '国药准字H10980143');
INSERT INTO `list` VALUES ('4', '盐酸度洛西汀肠溶胶囊(欣百达)', '规格：60mg*14粒/', 'list_4.jpg', '美国礼来公司', '246.80', '113757', '国药准字H10980144');
INSERT INTO `list` VALUES ('5', '盐酸氯米帕明片', '规格：25mg*12片*4板/', 'list_5.jpg', '天津药物研究院药业有限责任公司', '24.30', '113758', '国药准字H10980145');
INSERT INTO `list` VALUES ('6', '盐酸帕罗西汀片', '规格：20mg*10片/', 'list_6.jpg', '浙江华海药业股份有限公司', '65.00', '113759', '国药准字H10980146');
INSERT INTO `list` VALUES ('7', '盐酸氟西汀片', '规格：10mg*14片/', 'list_7.jpg', '常州四药制药有限公司', '27.80', '113760', '国药准字H10980147');
INSERT INTO `list` VALUES ('8', '氢溴酸西酞普兰片(喜普妙)', '规格：20mg*14片/', 'list_8.jpg', '丹麦灵北制药厂西安杨森制药有限公司分装', '145.00', '113761', '国药准字H10980148');
INSERT INTO `list` VALUES ('9', '盐酸曲唑酮片', '规格：50mg*20片/', 'list_9.jpg', '常州华生制药有限公司', '84.80', '113762', '国药准字H10980149');
INSERT INTO `list` VALUES ('10', '盐酸文拉法辛胶囊', '规格：25mg*8粒*2板/', 'list_10.jpg', '成都康弘药业集团股份有限公司', '30.40', '113763', '国药准字H10980150');
INSERT INTO `list` VALUES ('11', '草酸艾司西酞普兰片(来士普)', '规格：10mg*7片/', 'list_11.jpg', '西安杨森制药有限公司', '98.00', '113764', '国药准字H10980151');
INSERT INTO `list` VALUES ('12', '盐酸文拉法辛缓释胶囊(怡诺思)', '规格：150mg*7粒*2板/', 'list_12.jpg', '惠氏制药有限公司', '172.00', '113765', '国药准字H10980152');
INSERT INTO `list` VALUES ('13', '盐酸度洛西汀肠溶胶囊(欣百达)', '规格：30mg*7粒/', 'list_13.jpg', 'Eli Lilly and Company 美国', '80.30', '113766', '国药准字H10980153');
INSERT INTO `list` VALUES ('14', '圣约翰草提取物片(路优泰)', '规格：300mg*15片/', 'list_14.jpg', '德国 Dr.Willmar Schwabe', '61.00', '113767', '国药准字H10980154');
INSERT INTO `list` VALUES ('15', '盐酸舍曲林片', '规格：50mg*14片*1板/', 'list_15.jpg', '天津华津制药有限公司', '45.00', '113768', '国药准字H10980155');
INSERT INTO `list` VALUES ('16', '米氮平片(派迪生)', '规格：30mg*10片/', 'list_16.jpg', '华裕(无锡)制药有限公司', '47.20', '113769', '国药准字H10980156');
INSERT INTO `list` VALUES ('17', '舒肝解郁胶囊', '规格：0.36g*28粒/', 'list_17.jpg', '成都康弘药业集团股份有限公司', '61.70', '113770', '国药准字H10980157');
INSERT INTO `list` VALUES ('18', '氢溴酸西酞普兰片', '规格：20mg*14片/', 'list_18.jpg', '四川科伦药业股份有限公司', '27.50', '113771', '国药准字H10980158');
INSERT INTO `list` VALUES ('19', '盐酸多塞平片(鲁明)', '规格：25mg*100片/', 'list_19.jpg', '山东仁和堂药业有限公司', '30.00', '113772', '国药准字H10980159');
INSERT INTO `list` VALUES ('20', '盐酸文拉法辛缓释胶囊', '规格：75mg*7粒*2板/', 'list_20.jpg', '惠氏制药有限公司', '114.30', '113773', '国药准字H10980160');
INSERT INTO `list` VALUES ('21', '盐酸文拉法辛缓释胶囊', '规格：150mg*14 粒/', 'list_21.jpg', '惠氏制药有限公司', '169.80', '113774', '国药准字H10980161');
INSERT INTO `list` VALUES ('22', '盐酸氟西汀分散片（百优解）', '规格：20mg×28片/', 'list_22.jpg', 'PATHEON FRANCE', '205.80', '113775', '国药准字H10980162');
INSERT INTO `list` VALUES ('23', '盐酸氟西汀胶囊', '规格：20mg*7粒/', 'list_23.jpg', '礼来苏州制药有限公司', '74.80', '113776', '国药准字H10980163');
INSERT INTO `list` VALUES ('24', '氢溴酸西酞普兰片', '规格：20mg*14片/', 'list_24.jpg', '西安杨森制药有限公司', '133.80', '113777', '国药准字H10980164');

-- ----------------------------
-- Table structure for shoppingcar
-- ----------------------------
DROP TABLE IF EXISTS `shoppingcar`;
CREATE TABLE `shoppingcar` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `spec` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoppingcar
-- ----------------------------
INSERT INTO `shoppingcar` VALUES ('3', '马来酸氟伏沙明片(兰释)', 'list_3.jpg', '规格：50mg*30片/', '荷兰Solvay Pharmaceuticals', '72.60', '2');
INSERT INTO `shoppingcar` VALUES ('4', '盐酸度洛西汀肠溶胶囊(欣百达)', 'list_4.jpg', '规格：60mg*14粒/', '美国礼来公司', '246.80', '6');
INSERT INTO `shoppingcar` VALUES ('7', '盐酸氟西汀片', 'list_7.jpg', '规格：10mg*14片/', '常州四药制药有限公司', '27.80', '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `name` varchar(255) NOT NULL,
  `psw1` varchar(255) DEFAULT NULL,
  `psw2` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('13420127609', 'woshiljw', 'woshiljw');
INSERT INTO `user` VALUES ('13420127603', 'awoshi', 'awoshi');
INSERT INTO `user` VALUES ('13420127604', 'wohsijingwen', 'wohsijingwen');
INSERT INTO `user` VALUES ('13420127602', 'a123456', 'a123456');
SET FOREIGN_KEY_CHECKS=1;
