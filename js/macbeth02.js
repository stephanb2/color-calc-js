var SB = SB || {};

SB.data = SB.data || {};


/*
 * CIE Standard Observer 1931 - 2 degrees
 */
SB.data.CIEobs31 = {
    "start":380,
    "end":780,
    "step":10,
    "x":[0.001368, 0.004243, 0.01431, 0.04351, 0.13438, 0.2839, 0.34828, 0.3362, 0.2908, 0.19536, 0.09564, 0.03201, 0.0049, 0.0093, 0.06327, 0.1655, 0.2904, 0.43345, 0.5945, 0.7621, 0.9163, 1.0263, 1.0622, 1.0026, 0.85445, 0.6424, 0.4479, 0.2835, 0.1649, 0.0874, 0.04677, 0.0227, 0.011359, 0.00579, 0.002899, 0.00144, 0.00069, 0.000332, 0.000166, 0.000083, 0.000042],
    "y":[0.000039, 0.00012, 0.000396, 0.00121, 0.004, 0.0116, 0.023, 0.038, 0.06, 0.09098, 0.13902, 0.20802, 0.323, 0.503, 0.71, 0.862, 0.954, 0.99495, 0.995, 0.952, 0.87, 0.757, 0.631, 0.503, 0.381, 0.265, 0.175, 0.107, 0.061, 0.032, 0.017, 0.00821, 0.004102, 0.002091, 0.001047, 0.00052, 0.000249, 0.00012, 0.00006, 0.00003, 0.000015],
    "z":[0.00645, 0.02005, 0.06785, 0.2074, 0.6456, 1.3856, 1.74706, 1.77211, 1.6692, 1.28764, 0.81295, 0.46518, 0.272, 0.1582, 0.07825, 0.04216, 0.0203, 0.00875, 0.0039, 0.0021, 0.00165, 0.0011, 0.0008, 0.00034, 0.00019, 0.00005, 0.00002, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "A":[1.0985, 1.00, 0.3558],
    "C":[0.9807, 1.00, 1.1822],
    "D50":[0.9642, 1.00, 0.8251],
    "D65":[0.9504, 1.00, 1.0888]
};

/*
 * CIE Standard Observer 1964 - 10 degrees
 */
SB.data.CIEobs64 = {
    "start":380,
    "end":780,
    "step":10,
    "x":[0.00016, 0.002362, 0.01911, 0.084736, 0.204492, 0.314679, 0.383734, 0.370702, 0.302273, 0.195618, 0.080507, 0.016172, 0.003816, 0.037465, 0.117749, 0.236491, 0.376772, 0.529826, 0.705224, 0.878655, 1.01416, 1.11852, 1.12399, 1.03048, 0.856297, 0.647467, 0.431567, 0.268329, 0.152568, 0.081261, 0.040851, 0.019941, 0.009577, 0.004553, 0.002175, 0.001045, 0.000508, 0.000251, 0.000126, 0.000065, 0.000033],
    "y":[0.000017, 0.000253, 0.002004, 0.008756, 0.021391, 0.038676, 0.062077, 0.089456, 0.128201, 0.18519, 0.253589, 0.339133, 0.460777, 0.606741, 0.761757, 0.875211, 0.961988, 0.991761, 0.99734, 0.955552, 0.868934, 0.777405, 0.658341, 0.527963, 0.398057, 0.283493, 0.179828, 0.107633, 0.060281, 0.0318, 0.015905, 0.007749, 0.003718, 0.001768, 0.000846, 0.000407, 0.000199, 0.000098, 0.00005, 0.000025, 0.000013],
    "z":[0.000705, 0.010482, 0.086011, 0.389366, 0.972542, 1.55348, 1.96728, 1.9948, 1.74537, 1.31756, 0.772125, 0.415254, 0.218502, 0.112044, 0.060709, 0.030451, 0.013676, 0.003988, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "A":[1.1114, 1.00, 0.3520],
    "C":[0.9759, 1.00, 1.0732],
    "D50":[0.9672, 1.00, 0.8143],
    "D65":[0.9481, 1.00, 1.0732]
};

/*
 * CIE Standard Illuminants - averaged to 10nm - box window.
 */
SB.data.CIEil = {
    "start":300,
    "end":780,
    "step":10,
    "A":[1.0293465, 1.48994, 2.09744, 2.87921, 3.86308, 5.07654, 6.54591, 8.295575, 10.34735, 12.7198, 15.428, 18.483, 21.89165, 25.6567, 29.77675, 34.24635, 39.05615, 44.19335, 49.64205, 55.38355, 61.39655, 67.658, 74.1431, 80.82595, 87.6797, 94.67715, 101.791, 108.9935, 116.258, 123.5585, 130.87, 138.167, 145.4265, 152.627, 159.7475, 166.769, 173.673, 180.4435, 187.065, 193.5245, 199.81, 205.91, 211.8165, 217.52, 223.014, 228.2925, 233.352, 238.189, 241.675],
    "C":[0, 0, 0.105, 0.975, 3.775, 8.475, 15.05, 24.45, 36.46, 51.285, 67.555, 85.065, 101.95, 115.075, 122.475, 123.8, 123.2, 123.945, 123.41, 118.8, 109.54, 100.555, 96.84, 98.97, 103.025, 105.435, 104.705, 101.225, 96.615, 92.21, 89.265, 88.295, 88.08, 87.93, 87.895, 88.2, 87.56, 85.8, 83.105, 79.22, 75.33, 71.4, 67.3, 63.6, 60.85, 58.85, 58.05, 58.35, 59.1],
    "D50":[0.527, 3.4825, 9.5205, 15.548, 18.7135, 21.743, 24.6965, 26.3425, 25.8335, 34.73, 51.109, 57.393, 59.48, 62.0695, 77.9305, 88.0885, 90.801, 92.303, 94.3225, 92.903, 95.9465, 96.742, 98.3715, 101.763, 101.1455, 101.738, 99.434, 98.031, 97.563, 94.546, 98.083, 99.212, 98.212, 96.506, 98.0595, 96.298, 99.3935, 102.0355, 96.195, 88.4365, 91.925, 88.8805, 79.2685, 88.0285, 88.9925, 73.0955, 63.9995, 81.761, 78.274],
    "D65":[0.8492, 7.52985, 24.44035, 37.7773, 41.1895, 45.34335, 48.001, 51.5607, 51.14365, 61.67485, 84.93765, 91.97245, 91.7444, 91.22795, 107.9005, 117.209, 117.074, 115.1265, 114.145, 108.9465, 108.966, 107.049, 105.5145, 106.868, 104.315, 103.0345, 99.08355, 96.19765, 94.0124, 89.01575, 89.9044, 89.124, 86.59615, 83.39125, 82.7811, 80.07375, 80.7304, 81.2794, 76.14345, 70.19325, 72.29405, 71.16275, 63.6744, 71.18595, 72.2134, 59.29905, 51.515, 65.94975, 63.3828]
};

/*
 * Macbeth ColorChecker Spectral data by Danny Pascale
 * 30 charts average
 */
SB.data.GMCCavg30 = {
    "start":380,
    "end":730,
    "step":10,
    "A1":[0.05475, 0.05833, 0.06116, 0.06238, 0.06231, 0.06207, 0.06183, 0.06159, 0.06154, 0.06162, 0.06203, 0.06296, 0.06518, 0.07027, 0.07640, 0.07949, 0.08128, 0.08429, 0.09058, 0.10290, 0.11905, 0.13426, 0.14320, 0.14688, 0.15077, 0.15810, 0.16819, 0.17890, 0.18755, 0.18964, 0.18577, 0.18149, 0.18161, 0.18721, 0.19605, 0.20949],
    "B1":[0.05381, 0.05369, 0.05326, 0.05370, 0.05402, 0.05452, 0.05495, 0.05516, 0.05568, 0.05664, 0.05840, 0.06122, 0.06822, 0.08942, 0.12461, 0.15350, 0.17379, 0.19944, 0.24827, 0.33542, 0.44399, 0.53847, 0.58667, 0.59484, 0.59059, 0.58662, 0.58417, 0.58386, 0.58975, 0.60251, 0.62039, 0.63880, 0.65481, 0.66255, 0.66255, 0.66681],
    "C1":[0.06624, 0.07864, 0.10159, 0.14554, 0.19951, 0.24440, 0.28250, 0.30936, 0.30759, 0.27781, 0.23087, 0.17754, 0.12971, 0.09428, 0.06954, 0.05399, 0.04582, 0.04167, 0.03944, 0.03831, 0.03775, 0.03775, 0.03797, 0.03852, 0.03925, 0.03987, 0.04080, 0.04232, 0.04418, 0.04547, 0.04584, 0.04642, 0.04837, 0.05217, 0.05731, 0.06498],
    "D1":[0.18936, 0.25464, 0.42260, 0.66021, 0.81098, 0.86212, 0.87658, 0.88417, 0.89104, 0.89566, 0.89932, 0.90370, 0.90718, 0.90908, 0.91091, 0.91005, 0.91122, 0.91402, 0.91343, 0.91602, 0.91548, 0.91584, 0.91433, 0.91547, 0.91764, 0.91863, 0.92101, 0.92291, 0.92386, 0.92199, 0.92242, 0.92477, 0.92749, 0.92977, 0.93041, 0.93329],
    "A2":[0.11713, 0.14345, 0.17453, 0.19093, 0.19560, 0.19900, 0.20423, 0.21318, 0.22842, 0.25127, 0.28005, 0.30878, 0.32945, 0.33336, 0.31460, 0.28628, 0.27349, 0.27646, 0.27720, 0.28930, 0.33938, 0.42022, 0.48779, 0.52511, 0.54574, 0.56156, 0.57788, 0.59497, 0.61180, 0.62475, 0.63810, 0.65596, 0.67822, 0.69958, 0.71709, 0.73382],
    "B2":[0.12236, 0.16448, 0.22850, 0.28608, 0.32730, 0.36108, 0.38757, 0.39963, 0.39157, 0.36243, 0.31612, 0.26024, 0.20858, 0.16831, 0.13768, 0.11656, 0.10425, 0.09637, 0.08980, 0.08551, 0.08372, 0.08396, 0.08432, 0.08411, 0.08386, 0.08517, 0.08977, 0.09785, 0.10912, 0.12346, 0.14269, 0.16930, 0.20465, 0.24395, 0.28719, 0.33249],
    "C2":[0.05195, 0.05306, 0.05420, 0.05545, 0.05677, 0.05856, 0.06137, 0.06576, 0.07483, 0.09269, 0.12488, 0.17789, 0.24579, 0.30725, 0.33716, 0.33354, 0.31653, 0.29299, 0.26186, 0.22999, 0.19765, 0.16504, 0.13501, 0.11490, 0.10397, 0.09791, 0.09439, 0.09235, 0.09277, 0.09653, 0.10240, 0.10842, 0.11345, 0.11533, 0.11392, 0.11427],
    "D2":[0.17085, 0.23206, 0.36507, 0.50656, 0.56749, 0.58270, 0.58770, 0.59009, 0.59099, 0.58977, 0.58841, 0.58843, 0.58898, 0.58948, 0.59059, 0.59002, 0.58990, 0.59030, 0.58929, 0.59094, 0.59031, 0.58971, 0.58713, 0.58515, 0.58304, 0.57996, 0.57779, 0.57595, 0.57440, 0.57221, 0.57061, 0.56922, 0.56828, 0.56797, 0.56648, 0.56631],
    "A3":[0.13036, 0.17707, 0.25101, 0.30625, 0.32392, 0.32993, 0.33283, 0.33097, 0.32342, 0.31134, 0.29823, 0.28533, 0.26943, 0.25037, 0.23144, 0.21426, 0.19942, 0.18451, 0.16938, 0.15729, 0.14911, 0.14482, 0.14186, 0.14057, 0.14067, 0.14109, 0.14257, 0.14654, 0.15184, 0.15351, 0.15009, 0.14395, 0.13639, 0.13235, 0.13496, 0.14673],
    "B3":[0.09600, 0.11466, 0.13058, 0.13508, 0.13345, 0.13159, 0.13021, 0.12811, 0.12505, 0.12048, 0.11512, 0.10985, 0.10494, 0.09982, 0.09516, 0.09265, 0.09247, 0.09319, 0.09621, 0.10812, 0.15557, 0.26539, 0.39871, 0.50008, 0.55632, 0.57945, 0.58773, 0.59063, 0.59251, 0.59445, 0.59785, 0.60219, 0.60690, 0.60925, 0.60896, 0.61024],
    "C3":[0.04992, 0.04877, 0.04759, 0.04724, 0.04716, 0.04735, 0.04742, 0.04692, 0.04607, 0.04518, 0.04444, 0.04429, 0.04468, 0.04560, 0.04678, 0.04764, 0.04859, 0.05037, 0.05385, 0.05986, 0.07212, 0.10356, 0.17752, 0.31207, 0.46683, 0.58083, 0.64443, 0.67484, 0.69018, 0.69824, 0.70592, 0.71495, 0.72370, 0.73010, 0.73371, 0.73841],
    "D3":[0.14421, 0.19246, 0.27184, 0.33081, 0.35042, 0.35692, 0.36123, 0.36326, 0.36297, 0.36081, 0.35874, 0.35811, 0.35846, 0.35919, 0.36041, 0.36046, 0.36056, 0.36083, 0.36043, 0.36185, 0.36175, 0.36133, 0.35932, 0.35753, 0.35543, 0.35241, 0.34990, 0.34764, 0.34547, 0.34272, 0.34017, 0.33760, 0.33531, 0.33383, 0.33180, 0.33054],
    "A4":[0.05124, 0.05423, 0.05599, 0.05704, 0.05786, 0.05895, 0.06030, 0.06131, 0.06228, 0.06325, 0.06478, 0.06738, 0.07531, 0.10120, 0.14536, 0.17826, 0.18394, 0.17011, 0.14938, 0.13274, 0.12186, 0.11517, 0.10948, 0.10536, 0.10434, 0.10599, 0.10891, 0.11189, 0.11406, 0.11395, 0.11240, 0.11215, 0.11482, 0.11977, 0.12459, 0.13030],
    "B4":[0.09199, 0.11601, 0.14561, 0.16853, 0.17847, 0.17301, 0.15797, 0.13878, 0.11913, 0.10140, 0.08695, 0.07518, 0.06609, 0.06032, 0.05646, 0.05312, 0.05121, 0.05124, 0.05195, 0.05187, 0.05120, 0.05242, 0.05841, 0.07318, 0.09552, 0.11893, 0.14139, 0.16554, 0.19405, 0.22706, 0.26539, 0.30892, 0.35455, 0.39577, 0.43584, 0.47847],
    "C4":[0.05798, 0.05442, 0.05216, 0.05198, 0.05263, 0.05398, 0.05608, 0.05942, 0.06659, 0.08068, 0.10688, 0.15204, 0.22507, 0.33553, 0.46239, 0.55873, 0.61573, 0.64973, 0.67222, 0.69387, 0.70995, 0.72319, 0.73144, 0.73904, 0.74620, 0.75180, 0.75816, 0.76394, 0.76869, 0.77098, 0.77551, 0.78240, 0.79018, 0.79619, 0.79930, 0.80366],
    "D4":[0.10519, 0.13133, 0.16260, 0.18017, 0.18592, 0.18953, 0.19286, 0.19423, 0.19378, 0.19233, 0.19106, 0.19085, 0.19125, 0.19158, 0.19205, 0.19210, 0.19217, 0.19231, 0.19206, 0.19263, 0.19238, 0.19193, 0.19059, 0.18939, 0.18799, 0.18587, 0.18398, 0.18232, 0.18085, 0.17925, 0.17777, 0.17604, 0.17434, 0.17337, 0.17219, 0.17139],
    "A5":[0.14423, 0.19827, 0.29443, 0.37544, 0.40837, 0.42095, 0.42618, 0.42609, 0.41932, 0.40343, 0.37927, 0.34636, 0.31112, 0.28124, 0.25388, 0.22889, 0.21420, 0.20835, 0.20162, 0.19440, 0.19257, 0.20018, 0.21441, 0.22952, 0.24058, 0.25396, 0.27851, 0.31322, 0.34779, 0.36587, 0.36579, 0.35942, 0.35799, 0.36493, 0.37723, 0.39783],
    "B5":[0.06103, 0.06125, 0.06192, 0.06291, 0.06397, 0.06593, 0.06921, 0.07473, 0.08549, 0.10506, 0.13867, 0.19209, 0.27073, 0.37611, 0.47578, 0.53122, 0.54916, 0.54571, 0.52807, 0.50446, 0.47052, 0.42764, 0.38125, 0.34680, 0.32744, 0.31771, 0.31247, 0.30994, 0.31441, 0.32741, 0.34523, 0.36255, 0.37622, 0.38054, 0.37767, 0.37941],
    "C5":[0.14455, 0.19511, 0.28259, 0.34577, 0.36182, 0.35432, 0.33361, 0.30571, 0.27623, 0.24756, 0.21805, 0.18988, 0.16786, 0.14896, 0.12697, 0.10723, 0.09962, 0.10189, 0.10356, 0.10907, 0.13680, 0.19963, 0.29013, 0.40006, 0.51580, 0.61486, 0.68655, 0.73177, 0.75975, 0.77433, 0.78314, 0.79256, 0.80337, 0.81155, 0.81718, 0.82541],
    "D5":[0.06796, 0.07672, 0.08388, 0.08741, 0.08888, 0.09044, 0.09187, 0.09204, 0.09135, 0.09039, 0.08975, 0.08965, 0.08981, 0.08988, 0.08997, 0.08996, 0.09001, 0.09006, 0.08986, 0.08990, 0.08951, 0.08916, 0.08852, 0.08806, 0.08749, 0.08645, 0.08551, 0.08478, 0.08420, 0.08368, 0.08321, 0.08254, 0.08176, 0.08143, 0.08093, 0.08068],
    "A6":[0.13627, 0.17946, 0.24689, 0.29682, 0.32028, 0.33708, 0.35550, 0.38119, 0.41913, 0.46596, 0.51048, 0.54581, 0.56719, 0.57426, 0.56908, 0.55068, 0.52351, 0.48843, 0.44521, 0.39987, 0.35043, 0.29939, 0.25243, 0.22096, 0.20431, 0.19579, 0.19088, 0.18823, 0.19072, 0.19942, 0.21159, 0.22310, 0.23164, 0.23332, 0.22941, 0.22935],
    "B6":[0.06282, 0.06284, 0.06334, 0.06354, 0.06371, 0.06442, 0.06536, 0.06599, 0.06694, 0.06841, 0.07128, 0.07571, 0.08722, 0.12531, 0.20583, 0.30526, 0.38315, 0.43094, 0.46915, 0.51789, 0.56793, 0.60688, 0.62805, 0.63703, 0.63999, 0.64198, 0.64545, 0.64824, 0.65102, 0.65307, 0.65736, 0.66403, 0.67265, 0.67970, 0.68376, 0.68829],
    "C6":[0.10773, 0.14119, 0.19247, 0.23641, 0.26085, 0.28550, 0.31740, 0.35313, 0.39024, 0.42597, 0.44561, 0.44423, 0.42321, 0.38549, 0.33672, 0.28273, 0.23128, 0.18506, 0.14554, 0.11807, 0.10053, 0.08958, 0.08156, 0.07640, 0.07406, 0.07305, 0.07294, 0.07381, 0.07559, 0.07675, 0.07648, 0.07499, 0.07277, 0.07200, 0.07374, 0.07935],
    "D6":[0.03102, 0.03199, 0.03228, 0.03256, 0.03275, 0.03282, 0.03282, 0.03262, 0.03248, 0.03240, 0.03233, 0.03231, 0.03228, 0.03215, 0.03209, 0.03198, 0.03196, 0.03198, 0.03192, 0.03195, 0.03182, 0.03179, 0.03173, 0.03185, 0.03193, 0.03190, 0.03191, 0.03194, 0.03202, 0.03212, 0.03222, 0.03223, 0.03224, 0.03233, 0.03237, 0.03250]
};


SB.data.CCdisplay = {
    "A1":"#735244", "A2":"#c29682", "A3":"#627a9d", "A4":"#576c43", "A5":"#8580b1", "A6":"#67bdaa",
    "B1":"#d67e2c", "B2":"#505ba6", "B3":"#c15a63", "B4":"#5e3c6c", "B5":"#9dbc40", "B6":"#e0a32e",
    "C1":"#383d96", "C2":"#469449", "C3":"#af363c", "C4":"#e7c71f", "C5":"#bb5695", "C6":"#0885a1",
    "D1":"#f3f3f2", "D2":"#c8c8c8", "D3":"#a0a0a0", "D4":"#7a7a79", "D5":"#555555", "D6":"#343434"
};

/*----------------------------------------------------------------------------
 * math functions and colorimetric transforms
 *----------------------------------------------------------------------------
 */

SB.calc = (function ($) {
    'use strict';

	/*
	 * WARNING: this implementation provides no interpolation
	 * @requires: seriesA.step == seriesB.step
	 * @requires: (seriesB.start > seriesA.start) 
	 *               => exists i in NAT, seriesB.start == seriesA.start + i * seriesA.step
	 */
    function sumProduct2f(seriesA, idA, seriesB, idB){
        var i = 0, 
            x = 0,
            start = Math.max(seriesA.start, seriesB.start),
            end = Math.min(seriesA.end, seriesB.end), 
            step = seriesA.step, 
            offsetA = (start - seriesA.start) / step, 
            offsetB = (start - seriesB.start) / step,
            sum = 0;
            
        //FIXME: chrome specific
        //console.assert(seriesA.step === seriesB.step, "series must have equal steps");
        
        for (x = start; x <= end; x += step) {
            sum += seriesA[idA][offsetA + i] * seriesB[idB][offsetB + i];
            i += 1;
        }
        
        return sum;
    }

	/*
	 * Integral of inner Product of n series.
	 * USAGE: sumProduct(series1, var1, series2, var2, ... , seriesN, varN)
	 * @returns: sum(i, series1.var1[i]*series2.var2[i]* ... seriesN.var2[N])
	 *
	 * WARNING: this implementation provides no interpolation
	 * @requires: even number of arguments
	 * @requires: series[0].step == series[i].step
	 * @requires: (series[i].start > series[j].start) 
	 *               => exists k in NAT, series[j].start == series[i].start + k * seriesA.step
	 */
    function sumProduct(){
        var i, j, x,
            series = [],
            ids = [],
            start, end, step, 
            offset = [],
            prod, sum;
               
        for(i = 0; i<arguments.length; i+=1) {
        	series.push(arguments[i]);
        	i+=1;
        	//FIXME: chrome specific
        	//console.assert(i<arguments.length, "sumProduct requires even number of arguments");
        	ids.push(arguments[i]);
        }
        
        start = Math.max.apply(Math, jQuery.map(series, function(n, i){
                return n.start;
            })
        );
        end = Math.min.apply(Math, jQuery.map(series, function(n, i){
                return n.end;
            })
        );
        step = series[0].step;
        
        //FIXME: chrome specific
        //console.assert(seriesA.step === seriesB.step, "series must have equal steps");
        
        offset = jQuery.map(series, function(n, i){
                return (start - n.start)/step;
        });

        
        i = 0;
        sum = 0;
        /* in this loop i is the index, x is the guard */
        for (x = start; x <= end; x += step) {
            prod = 1;
            for (j = 0; j < series.length; j += 1) {
               /* we need: seriesJ.idJ[offsetJ + i]
                * using object as associative array syntax: seriesJ[idJ][offsetJ + i]
                */
               prod *= series[j][ ids[j] ][offset[j] + i];
            }
            sum += prod;
            i += 1;
        }
        
        return sum;
    }


    /*
     * returns 2D matrix product: vector*matrix, matrix1*matrix2 or matrix*vector
     */
    function matrixMult(left, right) {
        var i, j, k,
            leftheight, rightwidth,
            nright,
            sum, row, result,
            lvec = ! $.isArray(left[0]), 
            rvec = ! $.isArray(right[0]);
        
        result = [];
        
        if (lvec) { left = [ left ]; }
        
        // if right factor is a vector, it needs to be transposed
        if (rvec) { 
            right = jQuery.map(right, function(n, i){
                return [[n]];
            });
        };
        
        leftheight = left.length;
        rightwidth = right[0].length;


        for (i = 0; i < leftheight; i += 1) {
            row = [];
            for (j = 0; j < rightwidth; j += 1) {
                sum = 0;
                for (k = 0; k < right.length; k += 1) {
                    sum += left[i][k] * right[k][j];
                }
                if (rvec) { row = sum; } else { row.push(sum); }
            }
            result.push(row);
        };
        
        return lvec ? result[0] : result;
    }
    
    /*
     * returns a diagonal matrix from values of vector vec.
     */
    function diagMatrix(vec) {
        return jQuery.map(vec, function(n, i){
            var row = [], k;
            for (k = 0; k < vec.length; k += 1){
                row.push( (i === k) ? n : 0 );
            }
            return [row];
        });
    }


    /*----- colorimetric transforms ------------------*/

    function specToXYZ(series, id, illum, observ) {
        var x,y,z,n;
        
        x = sumProduct(SB.data[observ], "x", series, id, SB.data.CIEil, illum);
        y = sumProduct(SB.data[observ], "y", series, id, SB.data.CIEil, illum);
        z = sumProduct(SB.data[observ], "z", series, id, SB.data.CIEil, illum);
        n = sumProduct(SB.data[observ], "y", SB.data.CIEil,illum);
        
        return [x/n, y/n, z/n];
    }


    function XYZtoxyY (XYZ) {
        var sum = XYZ[0] + XYZ[1] + XYZ[2];
        
        if (sum === 0) {
            /* TODO: set x and y to the chromaticity coordinates of the reference white */
            return [0, 0, 0];
        }
        return [ XYZ[0]/sum, XYZ[1]/sum, XYZ[1] ];
    }
    
    
    function XYZtoLab (XYZ, refWhite, observ) {
        var xyz_r, f_xyz,
            inv3 = 1/3,
            epsilon = 216/24389,
            kappa = 24389/27;
        
        xyz_r = jQuery.map(XYZ, function(val, i){
            return val / SB.data[observ][refWhite][i];
        });
        
        f_xyz = jQuery.map(xyz_r, function(val, i){
            if (val > epsilon) {
                return Math.pow(val, inv3);
            }
            return (kappa*val + 16) / 116;
        });
        
        return [ 116*f_xyz[1] - 16, 500*(f_xyz[0]-f_xyz[1]), 200*(f_xyz[1]-f_xyz[2]) ];     
    }
    
    
    function XYZtoLuv (XYZ, refWhite, observ) {
        var XYZ_r, uv, uv_r, yr, L,
            inv3 = 1/3,
            epsilon = 216/24389,
            kappa = 24389/27;
            
        function XYZtoUV (XYZ) {
            var sum = XYZ[0] + 15*XYZ[1] + 3*XYZ[2];
            if (sum === 0) { return [0, 0]; };
            return [4*XYZ[0]/sum, 9*XYZ[1]/sum]
        }
        
        XYZ_r = SB.data[observ][refWhite];
        
        uv = XYZtoUV(XYZ);
        uv_r = XYZtoUV(XYZ_r);
        yr = XYZ[1]/XYZ_r[1];
        
        L = (yr > epsilon) ? 116*Math.pow(yr, inv3) - 16 : kappa*yr;
        
        return [ L, 13*L*(uv[0]-uv_r[0]), 13*L*(uv[1]-uv_r[1]) ]
    }
    
    
    return {
	    specToXYZ: specToXYZ,
	    XYZtoxyY:  XYZtoxyY,
        XYZtoLab: XYZtoLab,
        XYZtoLuv: XYZtoLuv,
        matrixMult: matrixMult,
        diagMatrix: diagMatrix
	};
    
}(jQuery));


/*----------------------------------------------------------------------------
 *  User interface
 *----------------------------------------------------------------------------
 */

/*----- configuration data----------------------------------------*/

SB.conf = {
    "CCTABLE_ID": "#colorTable",
    "XYZ_ID": "#XYZ",
    "XYY_ID": "#xyY",
    "LAB_ID": "#Lab",
    "LUV_ID": "#Luv",
    "DATALABEL_CLASS": "dataLabel",
    "PLOT_ID": "#plotLab",
    "ILLUM_SELECT_ID": "#illumRef",
    "OBSERV_SELECT_ID": "#observRef"
};

/*----- UI functions, DOM manipulation  ---------------------------*/

SB.macbeth = (function ($) {
    'use strict';
    
    var currentCell, illumRef, observRef, currentPlot;
    /* both are unsupported by IE8
    var CCIds = Object.keys(SB.data.CCdisplay);
    var CCIds = [index for (index in SB.data.CCdisplay)];
    */
    var CCIds = $.map(SB.data.CCdisplay, function(val, key) {
        return key;
    });    
    /* CCIds = ["A1", "A2", "A3", "A4", "A5", "A6", ... "D6"] */
    
    
    /*
     * builds ColorChecker table in DOM
     */
    function buildCCTable(table_id) {
        var j, row, cell, cellcolor,
            ncols = 6;

        $.each (['A','B','C','D'], function(i, value) {
            row = $("<tr>");
            
            for (j = 0; j < ncols; j+=1) {
                cellcolor = SB.data.CCdisplay[value + (j+1)];
                cell = $("<td>").text(value + (j+1));
                cell.css({"background":cellcolor, "color":cellcolor});
                cell.appendTo(row);
            }
             
            $(table_id).append(row);
        });
    }
    
    /*
     * displays numeric data in DOM
     *@requires: global variables: illumRef, observRef
     */
    function showResults(CC_Id) {

        $(SB.conf.XYZ_ID).html($("<td>").text("XYZ").addClass("dataLabel"));
        $(SB.conf.XYY_ID).html($("<td>").text("xyY").addClass("dataLabel"));
        $(SB.conf.LAB_ID).html($("<td>").text("Lab").addClass("dataLabel"));
        $(SB.conf.LUV_ID).html($("<td>").text("Luv").addClass("dataLabel"));
        
        var XYZ = SB.calc.specToXYZ(SB.data.GMCCavg30, CC_Id, illumRef, observRef); 
        $.each(XYZ, function(i, elm) {
            $(SB.conf.XYZ_ID).append($("<td>").text( elm.toFixed(4) ));
        });
        
        var xyY = SB.calc.XYZtoxyY(XYZ);
        $.each(xyY, function(i, elm) {
            $(SB.conf.XYY_ID).append($("<td>").text( elm.toFixed(4) ));
        });


        var Lab = SB.calc.XYZtoLab(XYZ, illumRef, observRef);
        $.each(Lab, function(i, elm) {
            $(SB.conf.LAB_ID).append($("<td>").text( elm.toFixed(2) ));
        });
        
        var Luv = SB.calc.XYZtoLuv(XYZ, illumRef, observRef);
        $.each(Luv, function(i, elm) {
            $(SB.conf.LUV_ID).append($("<td>").text( elm.toFixed(2) ));
        });
    }
    
    
    function buildLabplot(placeholder) {
        var vals = [],
            ccColors = [],
            options, plot;
        
        ccColors = $.map(CCIds, function(elm, i) {
            return SB.data.CCdisplay[ elm ];
        });
        
        options = {
            series: {
                lines: { show: false },
                points: { show: true, radius: 5 }
            },
            xaxis: { min: -75, max: 75 },
            yaxis: { min: -85, max: 85, position: "left" },
            colors: ccColors
        };
        
        $.each(CCIds, function(i, elm) {
            var XYZ = SB.calc.specToXYZ(SB.data.GMCCavg30, elm, illumRef, observRef);
            var Lab = SB.calc.XYZtoLab(XYZ, illumRef, observRef);
            vals.push([[Lab[1], Lab[2]]]);
        });
        
        return $.plot(placeholder, vals, options);
    }
    
    
    function init() {
        $(SB.conf.CCTABLE_ID + " tr td:contains('A1')").toggleClass("active");
        currentCell = "A1";
        illumRef = $(SB.conf.ILLUM_SELECT_ID).val();
        observRef = $(SB.conf.OBSERV_SELECT_ID).val();
        showResults("A1");
        currentPlot = buildLabplot(SB.conf.PLOT_ID);
        currentPlot.highlight(0,0);
    }


    function onCellClick(event) {
        $(SB.conf.CCTABLE_ID + " .active").toggleClass("active");
        $(this).toggleClass("active");
        /* highlight and unhighlight methods don't work in IE8  */
        currentPlot.unhighlight(CCIds.indexOf(currentCell), 0);
        currentCell = $(this).text();    
        showResults(currentCell);
        currentPlot.highlight(CCIds.indexOf(currentCell), 0);
    }
    
    function setIllum(event) {
        illumRef = $(SB.conf.ILLUM_SELECT_ID).val();
        showResults(currentCell);
        currentPlot = buildLabplot(SB.conf.PLOT_ID);
        currentPlot.highlight(CCIds.indexOf(currentCell), 0);
    } 
    
    function setObserv(event) {
        observRef = $(SB.conf.OBSERV_SELECT_ID).val();
        showResults(currentCell);
        currentPlot = buildLabplot(SB.conf.PLOT_ID);
        currentPlot.highlight(CCIds.indexOf(currentCell), 0);
    } 
    
	
	return {
	    buildCCTable: buildCCTable,
	    onCellClick:  onCellClick,
        setIllum: setIllum,
        setObserv: setObserv,
        buildLabplot: buildLabplot,
	    init: init
	};
	
}(jQuery));




window.onload = function () {
   SB.macbeth.buildCCTable(SB.conf.CCTABLE_ID);
   SB.macbeth.init();
   
   
   $(SB.conf.CCTABLE_ID + " tr td").on("click", SB.macbeth.onCellClick);
   $(SB.conf.ILLUM_SELECT_ID).on("change", SB.macbeth.setIllum);
   $(SB.conf.OBSERV_SELECT_ID).on("change", SB.macbeth.setObserv);
}
   

