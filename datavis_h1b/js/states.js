statesAbbr = [
	  ["US National", "US", "US", ''],
	  ["ALABAMA","AL","Ala.",1],
	  ["ALASKA","AK","Alaska",2],
	  ["ARIZONA","AZ","Ariz.",4],
	  ["ARKANSAS","AR","Ark.",5],
	  ["CALIFORNIA","CA","Calif.",6],
	  ["COLORADO","CO","Colo.",8],
	  ["CONNECTICUT","CT","Conn.",9],
	  ["DELAWARE","DE","Del.",10],
	  ["DISTRICT OF COLUMBIA","DC","D.C.",11],
	  ["FLORIDA","FL","Fla.",12],
	  ["GEORGIA","GA","Ga.",13],
	  ["HAWAII","HI","Hawaii",15],
	  ["IDAHO","ID","Idaho",16],
	  ["ILLINOIS","IL","Ill.",17],
	  ["INDIANA","IN","Ind.",18],
	  ["IOWA","IA","Iowa",19],
	  ["KANSAS","KS","Kan.",20],
	  ["KENTUCKY","KY","Ky.",21],
	  ["LOUISIANA","LA","La.",22],
	  ["MAINE","ME","Maine",23],
	  ["MARYLAND","MD","Md.",24],
	  ["MASSACHUSETTS","MA","Mass.",25],
	  ["MICHIGAN","MI","Mich.",26],
	  ["MINNESOTA","MN","Minn.",27],
	  ["MISSISSIPPI","MS","Miss.",28],
	  ["MISSOURI","MO","Mo.",29],
	  ["MONTANA","MT","Mont.",30],
	  ["NEBRASKA","NE","Neb.",31],
	  ["NEVADA","NV","Nev.",32],
	  ["NEW HAMPSHIRE","NH","N.H.",33],
	  ["NEW JERSEY","NJ","N.J.",34],
	  ["NEW MEXICO","NM","N.M.",35],
	  ["NEW YORK","NY","N.Y.",36],
	  ["NORTH CAROLINA","NC","N.C.",37],
	  ["NORTH DAKOTA","ND","N.D.",38],
	  ["OHIO","OH","Ohio",39],
	  ["OKLAHOMA","OK","Okla.",40],
	  ["OREGON","OR","Ore.",41],
	  ["PENNSYLVANIA","PA","Pa.",42],
	  ["RHODE ISLAND","RI","R.I.",44],
	  ["SOUTH CAROLINA","SC","S.C.",45],
	  ["SOUTH DAKOTA","SD","S.D.",46],
	  ["TENNESSEE","TN","Tenn.",47],
	  ["TEXAS","TX","Texas",48],
	  ["UTAH","UT","Utah",49],
	  ["VERMONT","VT","Vt.",50],
	  ["VIRGINIA","VA","Va.",51],
	  ["WASHINGTON","WA","Wash.",53],
	  ["WEST VIRGINIA","WV","W.Va.",54],
	  ["WISCONSIN","WI","Wis.",55],
	  ["WYOMING","WY","Wyo.",56]
	]


var nameToFips = function(name) {
	var fips = 0;
	statesAbbr.forEach(function(state) {
		if (state[0] == name) {
			fips = state[3];
		}
	})
	return fips;
}

var nameToAbbr = function(name) {
	var abbr = '';
	statesAbbr.forEach(function(state) {
		if (state[0] == name) {
			abbr = state[1];
		}
	})
	return abbr;
}

var fipsToName = function(fips) {
	//fips of 72 or 78 are asking about Peurto Rico and the Virgin Islands; ignore them
	if (fips == 72 || fips == 78) { return ''; }

	var name = '';
	statesAbbr.forEach(function(state) {
		if (state[3] == fips) {
			name = state[0];
		}
	})
	if (name == '') { console.log('no name for fips ' + fips)};
	return name;
}

var fipsToAbbr = function(fips) {
	//fips of 72 or 78 are asking about Peurto Rico and the Virgin Islands; ignore them
	if (fips == 72 || fips == 78) { return ''; }

	var abbr = '';
	statesAbbr.forEach(function(state) {
		if (state[3] == fips) {
			abbr = state[1];
		}
	})
	return abbr;
}

var abbrToName = function(abbr) {
	var name = '';
	statesAbbr.forEach(function(state) {
		if (state[1] == abbr) {
			name = state[0];
		}
	})
	return name;	
}