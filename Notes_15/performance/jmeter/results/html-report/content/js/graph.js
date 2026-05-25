/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 514.0, "minX": 0.0, "maxY": 1875.0, "series": [{"data": [[0.0, 514.0], [0.1, 514.0], [0.2, 514.0], [0.3, 514.0], [0.4, 522.0], [0.5, 522.0], [0.6, 522.0], [0.7, 522.0], [0.8, 528.0], [0.9, 528.0], [1.0, 528.0], [1.1, 532.0], [1.2, 532.0], [1.3, 532.0], [1.4, 532.0], [1.5, 547.0], [1.6, 547.0], [1.7, 547.0], [1.8, 555.0], [1.9, 555.0], [2.0, 555.0], [2.1, 555.0], [2.2, 579.0], [2.3, 579.0], [2.4, 579.0], [2.5, 674.0], [2.6, 674.0], [2.7, 674.0], [2.8, 674.0], [2.9, 675.0], [3.0, 675.0], [3.1, 675.0], [3.2, 675.0], [3.3, 687.0], [3.4, 687.0], [3.5, 687.0], [3.6, 688.0], [3.7, 688.0], [3.8, 688.0], [3.9, 688.0], [4.0, 694.0], [4.1, 694.0], [4.2, 694.0], [4.3, 717.0], [4.4, 717.0], [4.5, 717.0], [4.6, 717.0], [4.7, 722.0], [4.8, 722.0], [4.9, 722.0], [5.0, 722.0], [5.1, 722.0], [5.2, 722.0], [5.3, 722.0], [5.4, 728.0], [5.5, 728.0], [5.6, 728.0], [5.7, 738.0], [5.8, 738.0], [5.9, 738.0], [6.0, 738.0], [6.1, 738.0], [6.2, 738.0], [6.3, 738.0], [6.4, 738.0], [6.5, 741.0], [6.6, 741.0], [6.7, 741.0], [6.8, 743.0], [6.9, 743.0], [7.0, 743.0], [7.1, 743.0], [7.2, 743.0], [7.3, 743.0], [7.4, 743.0], [7.5, 744.0], [7.6, 744.0], [7.7, 744.0], [7.8, 744.0], [7.9, 750.0], [8.0, 750.0], [8.1, 750.0], [8.2, 751.0], [8.3, 751.0], [8.4, 751.0], [8.5, 751.0], [8.6, 753.0], [8.7, 753.0], [8.8, 753.0], [8.9, 755.0], [9.0, 755.0], [9.1, 755.0], [9.2, 755.0], [9.3, 755.0], [9.4, 755.0], [9.5, 755.0], [9.6, 755.0], [9.7, 757.0], [9.8, 757.0], [9.9, 757.0], [10.0, 757.0], [10.1, 757.0], [10.2, 757.0], [10.3, 757.0], [10.4, 761.0], [10.5, 761.0], [10.6, 761.0], [10.7, 768.0], [10.8, 768.0], [10.9, 768.0], [11.0, 768.0], [11.1, 774.0], [11.2, 774.0], [11.3, 774.0], [11.4, 781.0], [11.5, 781.0], [11.6, 781.0], [11.7, 781.0], [11.8, 784.0], [11.9, 784.0], [12.0, 784.0], [12.1, 792.0], [12.2, 792.0], [12.3, 792.0], [12.4, 792.0], [12.5, 801.0], [12.6, 801.0], [12.7, 801.0], [12.8, 801.0], [12.9, 801.0], [13.0, 801.0], [13.1, 801.0], [13.2, 805.0], [13.3, 805.0], [13.4, 805.0], [13.5, 805.0], [13.6, 807.0], [13.7, 807.0], [13.8, 807.0], [13.9, 810.0], [14.0, 810.0], [14.1, 810.0], [14.2, 810.0], [14.3, 813.0], [14.4, 813.0], [14.5, 813.0], [14.6, 814.0], [14.7, 814.0], [14.8, 814.0], [14.9, 814.0], [15.0, 815.0], [15.1, 815.0], [15.2, 815.0], [15.3, 815.0], [15.4, 816.0], [15.5, 816.0], [15.6, 816.0], [15.7, 816.0], [15.8, 816.0], [15.9, 816.0], [16.0, 816.0], [16.1, 819.0], [16.2, 819.0], [16.3, 819.0], [16.4, 821.0], [16.5, 821.0], [16.6, 821.0], [16.7, 821.0], [16.8, 829.0], [16.9, 829.0], [17.0, 829.0], [17.1, 831.0], [17.2, 831.0], [17.3, 831.0], [17.4, 831.0], [17.5, 832.0], [17.6, 832.0], [17.7, 832.0], [17.8, 833.0], [17.9, 833.0], [18.0, 833.0], [18.1, 833.0], [18.2, 833.0], [18.3, 833.0], [18.4, 833.0], [18.5, 833.0], [18.6, 837.0], [18.7, 837.0], [18.8, 837.0], [18.9, 838.0], [19.0, 838.0], [19.1, 838.0], [19.2, 838.0], [19.3, 840.0], [19.4, 840.0], [19.5, 840.0], [19.6, 840.0], [19.7, 840.0], [19.8, 840.0], [19.9, 840.0], [20.0, 841.0], [20.1, 841.0], [20.2, 841.0], [20.3, 841.0], [20.4, 841.0], [20.5, 841.0], [20.6, 841.0], [20.7, 842.0], [20.8, 842.0], [20.9, 842.0], [21.0, 842.0], [21.1, 842.0], [21.2, 842.0], [21.3, 842.0], [21.4, 844.0], [21.5, 844.0], [21.6, 844.0], [21.7, 844.0], [21.8, 848.0], [21.9, 848.0], [22.0, 848.0], [22.1, 849.0], [22.2, 849.0], [22.3, 849.0], [22.4, 849.0], [22.5, 854.0], [22.6, 854.0], [22.7, 854.0], [22.8, 857.0], [22.9, 857.0], [23.0, 857.0], [23.1, 857.0], [23.2, 857.0], [23.3, 857.0], [23.4, 857.0], [23.5, 860.0], [23.6, 860.0], [23.7, 860.0], [23.8, 860.0], [23.9, 867.0], [24.0, 867.0], [24.1, 867.0], [24.2, 869.0], [24.3, 869.0], [24.4, 869.0], [24.5, 869.0], [24.6, 875.0], [24.7, 875.0], [24.8, 875.0], [24.9, 875.0], [25.0, 877.0], [25.1, 877.0], [25.2, 877.0], [25.3, 879.0], [25.4, 879.0], [25.5, 879.0], [25.6, 879.0], [25.7, 881.0], [25.8, 881.0], [25.9, 881.0], [26.0, 882.0], [26.1, 882.0], [26.2, 882.0], [26.3, 882.0], [26.4, 884.0], [26.5, 884.0], [26.6, 884.0], [26.7, 888.0], [26.8, 888.0], [26.9, 888.0], [27.0, 888.0], [27.1, 890.0], [27.2, 890.0], [27.3, 890.0], [27.4, 890.0], [27.5, 890.0], [27.6, 890.0], [27.7, 890.0], [27.8, 892.0], [27.9, 892.0], [28.0, 892.0], [28.1, 892.0], [28.2, 892.0], [28.3, 892.0], [28.4, 892.0], [28.5, 896.0], [28.6, 896.0], [28.7, 896.0], [28.8, 896.0], [28.9, 897.0], [29.0, 897.0], [29.1, 897.0], [29.2, 898.0], [29.3, 898.0], [29.4, 898.0], [29.5, 898.0], [29.6, 899.0], [29.7, 899.0], [29.8, 899.0], [29.9, 900.0], [30.0, 900.0], [30.1, 900.0], [30.2, 900.0], [30.3, 900.0], [30.4, 900.0], [30.5, 900.0], [30.6, 900.0], [30.7, 904.0], [30.8, 904.0], [30.9, 904.0], [31.0, 906.0], [31.1, 906.0], [31.2, 906.0], [31.3, 906.0], [31.4, 906.0], [31.5, 906.0], [31.6, 906.0], [31.7, 908.0], [31.8, 908.0], [31.9, 908.0], [32.0, 908.0], [32.1, 910.0], [32.2, 910.0], [32.3, 910.0], [32.4, 911.0], [32.5, 911.0], [32.6, 911.0], [32.7, 911.0], [32.8, 912.0], [32.9, 912.0], [33.0, 912.0], [33.1, 912.0], [33.2, 912.0], [33.3, 912.0], [33.4, 912.0], [33.5, 913.0], [33.6, 913.0], [33.7, 913.0], [33.8, 913.0], [33.9, 913.0], [34.0, 913.0], [34.1, 913.0], [34.2, 915.0], [34.3, 915.0], [34.4, 915.0], [34.5, 915.0], [34.6, 916.0], [34.7, 916.0], [34.8, 916.0], [34.9, 917.0], [35.0, 917.0], [35.1, 917.0], [35.2, 917.0], [35.3, 919.0], [35.4, 919.0], [35.5, 919.0], [35.6, 920.0], [35.7, 920.0], [35.8, 920.0], [35.9, 920.0], [36.0, 921.0], [36.1, 921.0], [36.2, 921.0], [36.3, 921.0], [36.4, 921.0], [36.5, 921.0], [36.6, 921.0], [36.7, 922.0], [36.8, 922.0], [36.9, 922.0], [37.0, 922.0], [37.1, 922.0], [37.2, 922.0], [37.3, 922.0], [37.4, 922.0], [37.5, 922.0], [37.6, 922.0], [37.7, 922.0], [37.8, 923.0], [37.9, 923.0], [38.0, 923.0], [38.1, 925.0], [38.2, 925.0], [38.3, 925.0], [38.4, 925.0], [38.5, 925.0], [38.6, 925.0], [38.7, 925.0], [38.8, 926.0], [38.9, 926.0], [39.0, 926.0], [39.1, 926.0], [39.2, 926.0], [39.3, 926.0], [39.4, 926.0], [39.5, 926.0], [39.6, 927.0], [39.7, 927.0], [39.8, 927.0], [39.9, 929.0], [40.0, 929.0], [40.1, 929.0], [40.2, 929.0], [40.3, 932.0], [40.4, 932.0], [40.5, 932.0], [40.6, 933.0], [40.7, 933.0], [40.8, 933.0], [40.9, 933.0], [41.0, 933.0], [41.1, 933.0], [41.2, 933.0], [41.3, 934.0], [41.4, 934.0], [41.5, 934.0], [41.6, 934.0], [41.7, 934.0], [41.8, 934.0], [41.9, 934.0], [42.0, 934.0], [42.1, 934.0], [42.2, 934.0], [42.3, 934.0], [42.4, 935.0], [42.5, 935.0], [42.6, 935.0], [42.7, 935.0], [42.8, 936.0], [42.9, 936.0], [43.0, 936.0], [43.1, 936.0], [43.2, 936.0], [43.3, 936.0], [43.4, 936.0], [43.5, 937.0], [43.6, 937.0], [43.7, 937.0], [43.8, 937.0], [43.9, 937.0], [44.0, 937.0], [44.1, 937.0], [44.2, 939.0], [44.3, 939.0], [44.4, 939.0], [44.5, 940.0], [44.6, 940.0], [44.7, 940.0], [44.8, 940.0], [44.9, 941.0], [45.0, 941.0], [45.1, 941.0], [45.2, 942.0], [45.3, 942.0], [45.4, 942.0], [45.5, 942.0], [45.6, 944.0], [45.7, 944.0], [45.8, 944.0], [45.9, 944.0], [46.0, 945.0], [46.1, 945.0], [46.2, 945.0], [46.3, 947.0], [46.4, 947.0], [46.5, 947.0], [46.6, 947.0], [46.7, 949.0], [46.8, 949.0], [46.9, 949.0], [47.0, 951.0], [47.1, 951.0], [47.2, 951.0], [47.3, 951.0], [47.4, 953.0], [47.5, 953.0], [47.6, 953.0], [47.7, 953.0], [47.8, 953.0], [47.9, 953.0], [48.0, 953.0], [48.1, 954.0], [48.2, 954.0], [48.3, 954.0], [48.4, 954.0], [48.5, 954.0], [48.6, 954.0], [48.7, 954.0], [48.8, 954.0], [48.9, 954.0], [49.0, 954.0], [49.1, 954.0], [49.2, 961.0], [49.3, 961.0], [49.4, 961.0], [49.5, 961.0], [49.6, 961.0], [49.7, 961.0], [49.8, 961.0], [49.9, 962.0], [50.0, 962.0], [50.1, 962.0], [50.2, 964.0], [50.3, 964.0], [50.4, 964.0], [50.5, 964.0], [50.6, 965.0], [50.7, 965.0], [50.8, 965.0], [50.9, 965.0], [51.0, 965.0], [51.1, 965.0], [51.2, 965.0], [51.3, 971.0], [51.4, 971.0], [51.5, 971.0], [51.6, 971.0], [51.7, 971.0], [51.8, 971.0], [51.9, 971.0], [52.0, 971.0], [52.1, 971.0], [52.2, 971.0], [52.3, 971.0], [52.4, 972.0], [52.5, 972.0], [52.6, 972.0], [52.7, 973.0], [52.8, 973.0], [52.9, 973.0], [53.0, 973.0], [53.1, 973.0], [53.2, 973.0], [53.3, 973.0], [53.4, 976.0], [53.5, 976.0], [53.6, 976.0], [53.7, 976.0], [53.8, 976.0], [53.9, 976.0], [54.0, 976.0], [54.1, 976.0], [54.2, 976.0], [54.3, 976.0], [54.4, 976.0], [54.5, 978.0], [54.6, 978.0], [54.7, 978.0], [54.8, 978.0], [54.9, 980.0], [55.0, 980.0], [55.1, 980.0], [55.2, 984.0], [55.3, 984.0], [55.4, 984.0], [55.5, 984.0], [55.6, 988.0], [55.7, 988.0], [55.8, 988.0], [55.9, 988.0], [56.0, 988.0], [56.1, 988.0], [56.2, 988.0], [56.3, 988.0], [56.4, 988.0], [56.5, 988.0], [56.6, 990.0], [56.7, 990.0], [56.8, 990.0], [56.9, 990.0], [57.0, 990.0], [57.1, 990.0], [57.2, 990.0], [57.3, 990.0], [57.4, 990.0], [57.5, 990.0], [57.6, 990.0], [57.7, 991.0], [57.8, 991.0], [57.9, 991.0], [58.0, 991.0], [58.1, 992.0], [58.2, 992.0], [58.3, 992.0], [58.4, 992.0], [58.5, 992.0], [58.6, 992.0], [58.7, 992.0], [58.8, 992.0], [58.9, 992.0], [59.0, 992.0], [59.1, 994.0], [59.2, 994.0], [59.3, 994.0], [59.4, 994.0], [59.5, 999.0], [59.6, 999.0], [59.7, 999.0], [59.8, 999.0], [59.9, 999.0], [60.0, 999.0], [60.1, 999.0], [60.2, 1000.0], [60.3, 1000.0], [60.4, 1000.0], [60.5, 1001.0], [60.6, 1001.0], [60.7, 1001.0], [60.8, 1001.0], [60.9, 1001.0], [61.0, 1001.0], [61.1, 1001.0], [61.2, 1001.0], [61.3, 1002.0], [61.4, 1002.0], [61.5, 1002.0], [61.6, 1006.0], [61.7, 1006.0], [61.8, 1006.0], [61.9, 1006.0], [62.0, 1007.0], [62.1, 1007.0], [62.2, 1007.0], [62.3, 1009.0], [62.4, 1009.0], [62.5, 1009.0], [62.6, 1009.0], [62.7, 1009.0], [62.8, 1009.0], [62.9, 1009.0], [63.0, 1016.0], [63.1, 1016.0], [63.2, 1016.0], [63.3, 1016.0], [63.4, 1017.0], [63.5, 1017.0], [63.6, 1017.0], [63.7, 1017.0], [63.8, 1019.0], [63.9, 1019.0], [64.0, 1019.0], [64.1, 1020.0], [64.2, 1020.0], [64.3, 1020.0], [64.4, 1020.0], [64.5, 1023.0], [64.6, 1023.0], [64.7, 1023.0], [64.8, 1023.0], [64.9, 1023.0], [65.0, 1023.0], [65.1, 1023.0], [65.2, 1028.0], [65.3, 1028.0], [65.4, 1028.0], [65.5, 1030.0], [65.6, 1030.0], [65.7, 1030.0], [65.8, 1030.0], [65.9, 1034.0], [66.0, 1034.0], [66.1, 1034.0], [66.2, 1037.0], [66.3, 1037.0], [66.4, 1037.0], [66.5, 1037.0], [66.6, 1037.0], [66.7, 1037.0], [66.8, 1037.0], [66.9, 1037.0], [67.0, 1045.0], [67.1, 1045.0], [67.2, 1045.0], [67.3, 1051.0], [67.4, 1051.0], [67.5, 1051.0], [67.6, 1051.0], [67.7, 1054.0], [67.8, 1054.0], [67.9, 1054.0], [68.0, 1054.0], [68.1, 1054.0], [68.2, 1054.0], [68.3, 1054.0], [68.4, 1059.0], [68.5, 1059.0], [68.6, 1059.0], [68.7, 1063.0], [68.8, 1063.0], [68.9, 1063.0], [69.0, 1063.0], [69.1, 1064.0], [69.2, 1064.0], [69.3, 1064.0], [69.4, 1067.0], [69.5, 1067.0], [69.6, 1067.0], [69.7, 1067.0], [69.8, 1068.0], [69.9, 1068.0], [70.0, 1068.0], [70.1, 1068.0], [70.2, 1072.0], [70.3, 1072.0], [70.4, 1072.0], [70.5, 1073.0], [70.6, 1073.0], [70.7, 1073.0], [70.8, 1073.0], [70.9, 1078.0], [71.0, 1078.0], [71.1, 1078.0], [71.2, 1079.0], [71.3, 1079.0], [71.4, 1079.0], [71.5, 1079.0], [71.6, 1079.0], [71.7, 1079.0], [71.8, 1079.0], [71.9, 1080.0], [72.0, 1080.0], [72.1, 1080.0], [72.2, 1080.0], [72.3, 1084.0], [72.4, 1084.0], [72.5, 1084.0], [72.6, 1091.0], [72.7, 1091.0], [72.8, 1091.0], [72.9, 1091.0], [73.0, 1092.0], [73.1, 1092.0], [73.2, 1092.0], [73.3, 1092.0], [73.4, 1094.0], [73.5, 1094.0], [73.6, 1094.0], [73.7, 1098.0], [73.8, 1098.0], [73.9, 1098.0], [74.0, 1098.0], [74.1, 1100.0], [74.2, 1100.0], [74.3, 1100.0], [74.4, 1102.0], [74.5, 1102.0], [74.6, 1102.0], [74.7, 1102.0], [74.8, 1106.0], [74.9, 1106.0], [75.0, 1106.0], [75.1, 1107.0], [75.2, 1107.0], [75.3, 1107.0], [75.4, 1107.0], [75.5, 1113.0], [75.6, 1113.0], [75.7, 1113.0], [75.8, 1113.0], [75.9, 1113.0], [76.0, 1113.0], [76.1, 1113.0], [76.2, 1115.0], [76.3, 1115.0], [76.4, 1115.0], [76.5, 1115.0], [76.6, 1117.0], [76.7, 1117.0], [76.8, 1117.0], [76.9, 1118.0], [77.0, 1118.0], [77.1, 1118.0], [77.2, 1118.0], [77.3, 1118.0], [77.4, 1118.0], [77.5, 1118.0], [77.6, 1126.0], [77.7, 1126.0], [77.8, 1126.0], [77.9, 1126.0], [78.0, 1127.0], [78.1, 1127.0], [78.2, 1127.0], [78.3, 1127.0], [78.4, 1127.0], [78.5, 1127.0], [78.6, 1127.0], [78.7, 1129.0], [78.8, 1129.0], [78.9, 1129.0], [79.0, 1129.0], [79.1, 1135.0], [79.2, 1135.0], [79.3, 1135.0], [79.4, 1139.0], [79.5, 1139.0], [79.6, 1139.0], [79.7, 1139.0], [79.8, 1144.0], [79.9, 1144.0], [80.0, 1144.0], [80.1, 1145.0], [80.2, 1145.0], [80.3, 1145.0], [80.4, 1145.0], [80.5, 1147.0], [80.6, 1147.0], [80.7, 1147.0], [80.8, 1149.0], [80.9, 1149.0], [81.0, 1149.0], [81.1, 1149.0], [81.2, 1151.0], [81.3, 1151.0], [81.4, 1151.0], [81.5, 1155.0], [81.6, 1155.0], [81.7, 1155.0], [81.8, 1155.0], [81.9, 1156.0], [82.0, 1156.0], [82.1, 1156.0], [82.2, 1156.0], [82.3, 1157.0], [82.4, 1157.0], [82.5, 1157.0], [82.6, 1167.0], [82.7, 1167.0], [82.8, 1167.0], [82.9, 1167.0], [83.0, 1173.0], [83.1, 1173.0], [83.2, 1173.0], [83.3, 1174.0], [83.4, 1174.0], [83.5, 1174.0], [83.6, 1174.0], [83.7, 1174.0], [83.8, 1174.0], [83.9, 1174.0], [84.0, 1198.0], [84.1, 1198.0], [84.2, 1198.0], [84.3, 1198.0], [84.4, 1201.0], [84.5, 1201.0], [84.6, 1201.0], [84.7, 1201.0], [84.8, 1201.0], [84.9, 1201.0], [85.0, 1201.0], [85.1, 1216.0], [85.2, 1216.0], [85.3, 1216.0], [85.4, 1216.0], [85.5, 1235.0], [85.6, 1235.0], [85.7, 1235.0], [85.8, 1250.0], [85.9, 1250.0], [86.0, 1250.0], [86.1, 1250.0], [86.2, 1254.0], [86.3, 1254.0], [86.4, 1254.0], [86.5, 1255.0], [86.6, 1255.0], [86.7, 1255.0], [86.8, 1255.0], [86.9, 1256.0], [87.0, 1256.0], [87.1, 1256.0], [87.2, 1268.0], [87.3, 1268.0], [87.4, 1268.0], [87.5, 1268.0], [87.6, 1272.0], [87.7, 1272.0], [87.8, 1272.0], [87.9, 1272.0], [88.0, 1275.0], [88.1, 1275.0], [88.2, 1275.0], [88.3, 1281.0], [88.4, 1281.0], [88.5, 1281.0], [88.6, 1281.0], [88.7, 1283.0], [88.8, 1283.0], [88.9, 1283.0], [89.0, 1287.0], [89.1, 1287.0], [89.2, 1287.0], [89.3, 1287.0], [89.4, 1290.0], [89.5, 1290.0], [89.6, 1290.0], [89.7, 1291.0], [89.8, 1291.0], [89.9, 1291.0], [90.0, 1291.0], [90.1, 1291.0], [90.2, 1291.0], [90.3, 1291.0], [90.4, 1291.0], [90.5, 1291.0], [90.6, 1291.0], [90.7, 1291.0], [90.8, 1296.0], [90.9, 1296.0], [91.0, 1296.0], [91.1, 1296.0], [91.2, 1302.0], [91.3, 1302.0], [91.4, 1302.0], [91.5, 1305.0], [91.6, 1305.0], [91.7, 1305.0], [91.8, 1305.0], [91.9, 1315.0], [92.0, 1315.0], [92.1, 1315.0], [92.2, 1316.0], [92.3, 1316.0], [92.4, 1316.0], [92.5, 1316.0], [92.6, 1336.0], [92.7, 1336.0], [92.8, 1336.0], [92.9, 1340.0], [93.0, 1340.0], [93.1, 1340.0], [93.2, 1340.0], [93.3, 1355.0], [93.4, 1355.0], [93.5, 1355.0], [93.6, 1375.0], [93.7, 1375.0], [93.8, 1375.0], [93.9, 1375.0], [94.0, 1389.0], [94.1, 1389.0], [94.2, 1389.0], [94.3, 1389.0], [94.4, 1392.0], [94.5, 1392.0], [94.6, 1392.0], [94.7, 1398.0], [94.8, 1398.0], [94.9, 1398.0], [95.0, 1398.0], [95.1, 1414.0], [95.2, 1414.0], [95.3, 1414.0], [95.4, 1418.0], [95.5, 1418.0], [95.6, 1418.0], [95.7, 1418.0], [95.8, 1418.0], [95.9, 1418.0], [96.0, 1418.0], [96.1, 1448.0], [96.2, 1448.0], [96.3, 1448.0], [96.4, 1448.0], [96.5, 1449.0], [96.6, 1449.0], [96.7, 1449.0], [96.8, 1579.0], [96.9, 1579.0], [97.0, 1579.0], [97.1, 1579.0], [97.2, 1585.0], [97.3, 1585.0], [97.4, 1585.0], [97.5, 1585.0], [97.6, 1604.0], [97.7, 1604.0], [97.8, 1604.0], [97.9, 1654.0], [98.0, 1654.0], [98.1, 1654.0], [98.2, 1654.0], [98.3, 1736.0], [98.4, 1736.0], [98.5, 1736.0], [98.6, 1799.0], [98.7, 1799.0], [98.8, 1799.0], [98.9, 1799.0], [99.0, 1856.0], [99.1, 1856.0], [99.2, 1856.0], [99.3, 1867.0], [99.4, 1867.0], [99.5, 1867.0], [99.6, 1867.0], [99.7, 1875.0], [99.8, 1875.0], [99.9, 1875.0]], "isOverall": false, "label": "Login API Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 500.0, "maxY": 85.0, "series": [{"data": [[600.0, 5.0], [700.0, 23.0], [800.0, 49.0], [900.0, 85.0], [1000.0, 39.0], [1100.0, 29.0], [1200.0, 19.0], [1300.0, 11.0], [1400.0, 5.0], [1500.0, 2.0], [1600.0, 2.0], [1700.0, 2.0], [1800.0, 3.0], [500.0, 7.0]], "isOverall": false, "label": "Login API Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 9.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 272.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 272.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 9.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.622775800711747, "minX": 1.7796885E12, "maxY": 9.622775800711747, "series": [{"data": [[1.7796885E12, 9.622775800711747]], "isOverall": false, "label": "10 Virtual Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7796885E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 671.0, "minX": 1.0, "maxY": 1327.4, "series": [{"data": [[8.0, 671.0], [4.0, 1102.0], [2.0, 1281.0], [1.0, 906.0], [9.0, 944.8333333333334], [5.0, 1327.4], [10.0, 1011.9043824701193], [6.0, 787.0], [3.0, 992.0], [7.0, 800.0]], "isOverall": false, "label": "Login API Request", "isController": false}, {"data": [[9.622775800711747, 1003.0782918149467]], "isOverall": false, "label": "Login API Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1180.2, "minX": 1.7796885E12, "maxY": 3643.633333333333, "series": [{"data": [[1.7796885E12, 3643.633333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7796885E12, 1180.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7796885E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1003.0782918149467, "minX": 1.7796885E12, "maxY": 1003.0782918149467, "series": [{"data": [[1.7796885E12, 1003.0782918149467]], "isOverall": false, "label": "Login API Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7796885E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 999.2313167259787, "minX": 1.7796885E12, "maxY": 999.2313167259787, "series": [{"data": [[1.7796885E12, 999.2313167259787]], "isOverall": false, "label": "Login API Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7796885E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 159.90035587188623, "minX": 1.7796885E12, "maxY": 159.90035587188623, "series": [{"data": [[1.7796885E12, 159.90035587188623]], "isOverall": false, "label": "Login API Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7796885E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 514.0, "minX": 1.7796885E12, "maxY": 1875.0, "series": [{"data": [[1.7796885E12, 1875.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7796885E12, 514.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7796885E12, 1291.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7796885E12, 1857.98]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7796885E12, 962.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7796885E12, 1412.3999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7796885E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 848.0, "minX": 2.0, "maxY": 1513.0, "series": [{"data": [[2.0, 1513.0], [8.0, 894.5], [9.0, 884.0], [10.0, 1027.0], [5.0, 925.0], [11.0, 965.0], [6.0, 848.0], [12.0, 971.5], [13.0, 906.0], [7.0, 992.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 844.5, "minX": 2.0, "maxY": 1503.0, "series": [{"data": [[2.0, 1503.0], [8.0, 892.0], [9.0, 883.0], [10.0, 1024.5], [5.0, 922.0], [11.0, 962.0], [6.0, 844.5], [12.0, 968.0], [13.0, 903.5], [7.0, 986.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 4.683333333333334, "minX": 1.7796885E12, "maxY": 4.683333333333334, "series": [{"data": [[1.7796885E12, 4.683333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7796885E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 4.683333333333334, "minX": 1.7796885E12, "maxY": 4.683333333333334, "series": [{"data": [[1.7796885E12, 4.683333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7796885E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 4.683333333333334, "minX": 1.7796885E12, "maxY": 4.683333333333334, "series": [{"data": [[1.7796885E12, 4.683333333333334]], "isOverall": false, "label": "Login API Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7796885E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 4.683333333333334, "minX": 1.7796885E12, "maxY": 4.683333333333334, "series": [{"data": [[1.7796885E12, 4.683333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7796885E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

