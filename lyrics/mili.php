<?php 


$duration = ['00_00_00',
'00_07_52',
'00_10_80',
'00_14_00',
'00_18_01',
'00_21_42',
'00_24_61',
'00_28_01',
'00_31_32',
'00_35_22',
'00_38_31',
'00_41_61',
'00_45_20',
'00_49_01',
'00_52_20',
'00_55_71',
'00_59_00',
'01_02_71',
'01_05_91',
'01_09_41',
'01_12_82',
'01_16_51',
'01_19_71',
'01_23_11',
'01_26_42',
'01_30_40',
'01_33_50',
'01_36_91',
'01_40_41',
'01_44_21',
'01_47_41',
'01_50_91',
'01_54_31',
'01_57_91',
'02_01_31',
'02_04_71',
'02_08_11',
'02_12_61',
'02_15_61',
'02_19_21',
'02_22_92',
'02_25_61',
'02_28_90',
'02_32_32',
'02_35_81',
'02_39_30',
'02_42_62',
'02_46_11',
'02_49_51',
'02_56_31',
'02_59_20',
'03_02_60',
'03_03_60',
'03_08_72'
];



foreach ($duration as $key => $value) {
	$parts = explode("_", $value);
	$min = $parts[0];
	$sec = $parts[1];
	$mil = $parts[2];

	// now how to convert those variable to mili??

	$minMili = $min * 60000;
	$secMili = $sec * 1000;

	$totalMili = $minMili + $secMili + $mil;

	// echo "$min menit $sec detik $mil mili, Total Mili : $totalMili<br>";
	echo "$totalMili<br>";
}
// fun note: entah mengapa bisa di-copy dan paste sesuai line di file json
// buat durasi

?>