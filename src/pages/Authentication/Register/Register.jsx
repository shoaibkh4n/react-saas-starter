import React, { useState } from "react";
import "../Login/login.css";
import Loader from "../../../Components/Loader/Loader";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Verification from "../../../Components/Verification/Verification";
import { Link } from "react-router-dom";
import "./register.css";
import Logo from "../../../Assets/logo.png";

import { useEffect } from "react";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState({});
  const [phone, setPhone] = useState("");
  const [lastName, setLastName] = useState("");
  const [conformPassword, setConfirmPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [resend, setResend] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [countryDialCode, setCountryDialCode] = useState("");
  const [country, setCountry] = useState([
    {
      name: "Afghanistan",
      dial_code: "+93",
      code: "AF",
    },
    {
      name: "Aland Islands",
      dial_code: "+358",
      code: "AX",
    },
    {
      name: "Albania",
      dial_code: "+355",
      code: "AL",
    },
    {
      name: "Algeria",
      dial_code: "+213",
      code: "DZ",
    },
    {
      name: "AmericanSamoa",
      dial_code: "+1684",
      code: "AS",
    },
    {
      name: "Andorra",
      dial_code: "+376",
      code: "AD",
    },
    {
      name: "Angola",
      dial_code: "+244",
      code: "AO",
    },
    {
      name: "Anguilla",
      dial_code: "+1264",
      code: "AI",
    },
    {
      name: "Antarctica",
      dial_code: "+672",
      code: "AQ",
    },
    {
      name: "Antigua and Barbuda",
      dial_code: "+1268",
      code: "AG",
    },
    {
      name: "Argentina",
      dial_code: "+54",
      code: "AR",
    },
    {
      name: "Armenia",
      dial_code: "+374",
      code: "AM",
    },
    {
      name: "Aruba",
      dial_code: "+297",
      code: "AW",
    },
    {
      name: "Australia",
      dial_code: "+61",
      code: "AU",
    },
    {
      name: "Austria",
      dial_code: "+43",
      code: "AT",
    },
    {
      name: "Azerbaijan",
      dial_code: "+994",
      code: "AZ",
    },
    {
      name: "Bahamas",
      dial_code: "+1242",
      code: "BS",
    },
    {
      name: "Bahrain",
      dial_code: "+973",
      code: "BH",
    },
    {
      name: "Bangladesh",
      dial_code: "+880",
      code: "BD",
    },
    {
      name: "Barbados",
      dial_code: "+1246",
      code: "BB",
    },
    {
      name: "Belarus",
      dial_code: "+375",
      code: "BY",
    },
    {
      name: "Belgium",
      dial_code: "+32",
      code: "BE",
    },
    {
      name: "Belize",
      dial_code: "+501",
      code: "BZ",
    },
    {
      name: "Benin",
      dial_code: "+229",
      code: "BJ",
    },
    {
      name: "Bermuda",
      dial_code: "+1441",
      code: "BM",
    },
    {
      name: "Bhutan",
      dial_code: "+975",
      code: "BT",
    },
    {
      name: "Bolivia, Plurinational State of",
      dial_code: "+591",
      code: "BO",
    },
    {
      name: "Bosnia and Herzegovina",
      dial_code: "+387",
      code: "BA",
    },
    {
      name: "Botswana",
      dial_code: "+267",
      code: "BW",
    },
    {
      name: "Brazil",
      dial_code: "+55",
      code: "BR",
    },
    {
      name: "British Indian Ocean Territory",
      dial_code: "+246",
      code: "IO",
    },
    {
      name: "Brunei Darussalam",
      dial_code: "+673",
      code: "BN",
    },
    {
      name: "Bulgaria",
      dial_code: "+359",
      code: "BG",
    },
    {
      name: "Burkina Faso",
      dial_code: "+226",
      code: "BF",
    },
    {
      name: "Burundi",
      dial_code: "+257",
      code: "BI",
    },
    {
      name: "Cambodia",
      dial_code: "+855",
      code: "KH",
    },
    {
      name: "Cameroon",
      dial_code: "+237",
      code: "CM",
    },
    {
      name: "Canada",
      dial_code: "+1",
      code: "CA",
    },
    {
      name: "Cape Verde",
      dial_code: "+238",
      code: "CV",
    },
    {
      name: "Cayman Islands",
      dial_code: "+ 345",
      code: "KY",
    },
    {
      name: "Central African Republic",
      dial_code: "+236",
      code: "CF",
    },
    {
      name: "Chad",
      dial_code: "+235",
      code: "TD",
    },
    {
      name: "Chile",
      dial_code: "+56",
      code: "CL",
    },
    {
      name: "China",
      dial_code: "+86",
      code: "CN",
    },
    {
      name: "Christmas Island",
      dial_code: "+61",
      code: "CX",
    },
    {
      name: "Cocos (Keeling) Islands",
      dial_code: "+61",
      code: "CC",
    },
    {
      name: "Colombia",
      dial_code: "+57",
      code: "CO",
    },
    {
      name: "Comoros",
      dial_code: "+269",
      code: "KM",
    },
    {
      name: "Congo",
      dial_code: "+242",
      code: "CG",
    },
    {
      name: "Congo, The Democratic Republic of the Congo",
      dial_code: "+243",
      code: "CD",
    },
    {
      name: "Cook Islands",
      dial_code: "+682",
      code: "CK",
    },
    {
      name: "Costa Rica",
      dial_code: "+506",
      code: "CR",
    },
    {
      name: "Cote d'Ivoire",
      dial_code: "+225",
      code: "CI",
    },
    {
      name: "Croatia",
      dial_code: "+385",
      code: "HR",
    },
    {
      name: "Cuba",
      dial_code: "+53",
      code: "CU",
    },
    {
      name: "Cyprus",
      dial_code: "+357",
      code: "CY",
    },
    {
      name: "Czech Republic",
      dial_code: "+420",
      code: "CZ",
    },
    {
      name: "Denmark",
      dial_code: "+45",
      code: "DK",
    },
    {
      name: "Djibouti",
      dial_code: "+253",
      code: "DJ",
    },
    {
      name: "Dominica",
      dial_code: "+1767",
      code: "DM",
    },
    {
      name: "Dominican Republic",
      dial_code: "+1849",
      code: "DO",
    },
    {
      name: "Ecuador",
      dial_code: "+593",
      code: "EC",
    },
    {
      name: "Egypt",
      dial_code: "+20",
      code: "EG",
    },
    {
      name: "El Salvador",
      dial_code: "+503",
      code: "SV",
    },
    {
      name: "Equatorial Guinea",
      dial_code: "+240",
      code: "GQ",
    },
    {
      name: "Eritrea",
      dial_code: "+291",
      code: "ER",
    },
    {
      name: "Estonia",
      dial_code: "+372",
      code: "EE",
    },
    {
      name: "Ethiopia",
      dial_code: "+251",
      code: "ET",
    },
    {
      name: "Falkland Islands (Malvinas)",
      dial_code: "+500",
      code: "FK",
    },
    {
      name: "Faroe Islands",
      dial_code: "+298",
      code: "FO",
    },
    {
      name: "Fiji",
      dial_code: "+679",
      code: "FJ",
    },
    {
      name: "Finland",
      dial_code: "+358",
      code: "FI",
    },
    {
      name: "France",
      dial_code: "+33",
      code: "FR",
    },
    {
      name: "French Guiana",
      dial_code: "+594",
      code: "GF",
    },
    {
      name: "French Polynesia",
      dial_code: "+689",
      code: "PF",
    },
    {
      name: "Gabon",
      dial_code: "+241",
      code: "GA",
    },
    {
      name: "Gambia",
      dial_code: "+220",
      code: "GM",
    },
    {
      name: "Georgia",
      dial_code: "+995",
      code: "GE",
    },
    {
      name: "Germany",
      dial_code: "+49",
      code: "DE",
    },
    {
      name: "Ghana",
      dial_code: "+233",
      code: "GH",
    },
    {
      name: "Gibraltar",
      dial_code: "+350",
      code: "GI",
    },
    {
      name: "Greece",
      dial_code: "+30",
      code: "GR",
    },
    {
      name: "Greenland",
      dial_code: "+299",
      code: "GL",
    },
    {
      name: "Grenada",
      dial_code: "+1473",
      code: "GD",
    },
    {
      name: "Guadeloupe",
      dial_code: "+590",
      code: "GP",
    },
    {
      name: "Guam",
      dial_code: "+1671",
      code: "GU",
    },
    {
      name: "Guatemala",
      dial_code: "+502",
      code: "GT",
    },
    {
      name: "Guernsey",
      dial_code: "+44",
      code: "GG",
    },
    {
      name: "Guinea",
      dial_code: "+224",
      code: "GN",
    },
    {
      name: "Guinea-Bissau",
      dial_code: "+245",
      code: "GW",
    },
    {
      name: "Guyana",
      dial_code: "+595",
      code: "GY",
    },
    {
      name: "Haiti",
      dial_code: "+509",
      code: "HT",
    },
    {
      name: "Holy See (Vatican City State)",
      dial_code: "+379",
      code: "VA",
    },
    {
      name: "Honduras",
      dial_code: "+504",
      code: "HN",
    },
    {
      name: "Hong Kong",
      dial_code: "+852",
      code: "HK",
    },
    {
      name: "Hungary",
      dial_code: "+36",
      code: "HU",
    },
    {
      name: "Iceland",
      dial_code: "+354",
      code: "IS",
    },
    {
      name: "India",
      dial_code: "+91",
      code: "IN",
    },
    {
      name: "Indonesia",
      dial_code: "+62",
      code: "ID",
    },
    {
      name: "Iran, Islamic Republic of Persian Gulf",
      dial_code: "+98",
      code: "IR",
    },
    {
      name: "Iraq",
      dial_code: "+964",
      code: "IQ",
    },
    {
      name: "Ireland",
      dial_code: "+353",
      code: "IE",
    },
    {
      name: "Isle of Man",
      dial_code: "+44",
      code: "IM",
    },
    {
      name: "Israel",
      dial_code: "+972",
      code: "IL",
    },
    {
      name: "Italy",
      dial_code: "+39",
      code: "IT",
    },
    {
      name: "Jamaica",
      dial_code: "+1876",
      code: "JM",
    },
    {
      name: "Japan",
      dial_code: "+81",
      code: "JP",
    },
    {
      name: "Jersey",
      dial_code: "+44",
      code: "JE",
    },
    {
      name: "Jordan",
      dial_code: "+962",
      code: "JO",
    },
    {
      name: "Kazakhstan",
      dial_code: "+77",
      code: "KZ",
    },
    {
      name: "Kenya",
      dial_code: "+254",
      code: "KE",
    },
    {
      name: "Kiribati",
      dial_code: "+686",
      code: "KI",
    },
    {
      name: "Korea, Democratic People's Republic of Korea",
      dial_code: "+850",
      code: "KP",
    },
    {
      name: "Korea, Republic of South Korea",
      dial_code: "+82",
      code: "KR",
    },
    {
      name: "Kuwait",
      dial_code: "+965",
      code: "KW",
    },
    {
      name: "Kyrgyzstan",
      dial_code: "+996",
      code: "KG",
    },
    {
      name: "Laos",
      dial_code: "+856",
      code: "LA",
    },
    {
      name: "Latvia",
      dial_code: "+371",
      code: "LV",
    },
    {
      name: "Lebanon",
      dial_code: "+961",
      code: "LB",
    },
    {
      name: "Lesotho",
      dial_code: "+266",
      code: "LS",
    },
    {
      name: "Liberia",
      dial_code: "+231",
      code: "LR",
    },
    {
      name: "Libyan Arab Jamahiriya",
      dial_code: "+218",
      code: "LY",
    },
    {
      name: "Liechtenstein",
      dial_code: "+423",
      code: "LI",
    },
    {
      name: "Lithuania",
      dial_code: "+370",
      code: "LT",
    },
    {
      name: "Luxembourg",
      dial_code: "+352",
      code: "LU",
    },
    {
      name: "Macao",
      dial_code: "+853",
      code: "MO",
    },
    {
      name: "Macedonia",
      dial_code: "+389",
      code: "MK",
    },
    {
      name: "Madagascar",
      dial_code: "+261",
      code: "MG",
    },
    {
      name: "Malawi",
      dial_code: "+265",
      code: "MW",
    },
    {
      name: "Malaysia",
      dial_code: "+60",
      code: "MY",
    },
    {
      name: "Maldives",
      dial_code: "+960",
      code: "MV",
    },
    {
      name: "Mali",
      dial_code: "+223",
      code: "ML",
    },
    {
      name: "Malta",
      dial_code: "+356",
      code: "MT",
    },
    {
      name: "Marshall Islands",
      dial_code: "+692",
      code: "MH",
    },
    {
      name: "Martinique",
      dial_code: "+596",
      code: "MQ",
    },
    {
      name: "Mauritania",
      dial_code: "+222",
      code: "MR",
    },
    {
      name: "Mauritius",
      dial_code: "+230",
      code: "MU",
    },
    {
      name: "Mayotte",
      dial_code: "+262",
      code: "YT",
    },
    {
      name: "Mexico",
      dial_code: "+52",
      code: "MX",
    },
    {
      name: "Micronesia, Federated States of Micronesia",
      dial_code: "+691",
      code: "FM",
    },
    {
      name: "Moldova",
      dial_code: "+373",
      code: "MD",
    },
    {
      name: "Monaco",
      dial_code: "+377",
      code: "MC",
    },
    {
      name: "Mongolia",
      dial_code: "+976",
      code: "MN",
    },
    {
      name: "Montenegro",
      dial_code: "+382",
      code: "ME",
    },
    {
      name: "Montserrat",
      dial_code: "+1664",
      code: "MS",
    },
    {
      name: "Morocco",
      dial_code: "+212",
      code: "MA",
    },
    {
      name: "Mozambique",
      dial_code: "+258",
      code: "MZ",
    },
    {
      name: "Myanmar",
      dial_code: "+95",
      code: "MM",
    },
    {
      name: "Namibia",
      dial_code: "+264",
      code: "NA",
    },
    {
      name: "Nauru",
      dial_code: "+674",
      code: "NR",
    },
    {
      name: "Nepal",
      dial_code: "+977",
      code: "NP",
    },
    {
      name: "Netherlands",
      dial_code: "+31",
      code: "NL",
    },
    {
      name: "Netherlands Antilles",
      dial_code: "+599",
      code: "AN",
    },
    {
      name: "New Caledonia",
      dial_code: "+687",
      code: "NC",
    },
    {
      name: "New Zealand",
      dial_code: "+64",
      code: "NZ",
    },
    {
      name: "Nicaragua",
      dial_code: "+505",
      code: "NI",
    },
    {
      name: "Niger",
      dial_code: "+227",
      code: "NE",
    },
    {
      name: "Nigeria",
      dial_code: "+234",
      code: "NG",
    },
    {
      name: "Niue",
      dial_code: "+683",
      code: "NU",
    },
    {
      name: "Norfolk Island",
      dial_code: "+672",
      code: "NF",
    },
    {
      name: "Northern Mariana Islands",
      dial_code: "+1670",
      code: "MP",
    },
    {
      name: "Norway",
      dial_code: "+47",
      code: "NO",
    },
    {
      name: "Oman",
      dial_code: "+968",
      code: "OM",
    },
    {
      name: "Pakistan",
      dial_code: "+92",
      code: "PK",
    },
    {
      name: "Palau",
      dial_code: "+680",
      code: "PW",
    },
    {
      name: "Palestinian Territory, Occupied",
      dial_code: "+970",
      code: "PS",
    },
    {
      name: "Panama",
      dial_code: "+507",
      code: "PA",
    },
    {
      name: "Papua New Guinea",
      dial_code: "+675",
      code: "PG",
    },
    {
      name: "Paraguay",
      dial_code: "+595",
      code: "PY",
    },
    {
      name: "Peru",
      dial_code: "+51",
      code: "PE",
    },
    {
      name: "Philippines",
      dial_code: "+63",
      code: "PH",
    },
    {
      name: "Pitcairn",
      dial_code: "+872",
      code: "PN",
    },
    {
      name: "Poland",
      dial_code: "+48",
      code: "PL",
    },
    {
      name: "Portugal",
      dial_code: "+351",
      code: "PT",
    },
    {
      name: "Puerto Rico",
      dial_code: "+1939",
      code: "PR",
    },
    {
      name: "Qatar",
      dial_code: "+974",
      code: "QA",
    },
    {
      name: "Romania",
      dial_code: "+40",
      code: "RO",
    },
    {
      name: "Russia",
      dial_code: "+7",
      code: "RU",
    },
    {
      name: "Rwanda",
      dial_code: "+250",
      code: "RW",
    },
    {
      name: "Reunion",
      dial_code: "+262",
      code: "RE",
    },
    {
      name: "Saint Barthelemy",
      dial_code: "+590",
      code: "BL",
    },
    {
      name: "Saint Helena, Ascension and Tristan Da Cunha",
      dial_code: "+290",
      code: "SH",
    },
    {
      name: "Saint Kitts and Nevis",
      dial_code: "+1869",
      code: "KN",
    },
    {
      name: "Saint Lucia",
      dial_code: "+1758",
      code: "LC",
    },
    {
      name: "Saint Martin",
      dial_code: "+590",
      code: "MF",
    },
    {
      name: "Saint Pierre and Miquelon",
      dial_code: "+508",
      code: "PM",
    },
    {
      name: "Saint Vincent and the Grenadines",
      dial_code: "+1784",
      code: "VC",
    },
    {
      name: "Samoa",
      dial_code: "+685",
      code: "WS",
    },
    {
      name: "San Marino",
      dial_code: "+378",
      code: "SM",
    },
    {
      name: "Sao Tome and Principe",
      dial_code: "+239",
      code: "ST",
    },
    {
      name: "Saudi Arabia",
      dial_code: "+966",
      code: "SA",
    },
    {
      name: "Senegal",
      dial_code: "+221",
      code: "SN",
    },
    {
      name: "Serbia",
      dial_code: "+381",
      code: "RS",
    },
    {
      name: "Seychelles",
      dial_code: "+248",
      code: "SC",
    },
    {
      name: "Sierra Leone",
      dial_code: "+232",
      code: "SL",
    },
    {
      name: "Singapore",
      dial_code: "+65",
      code: "SG",
    },
    {
      name: "Slovakia",
      dial_code: "+421",
      code: "SK",
    },
    {
      name: "Slovenia",
      dial_code: "+386",
      code: "SI",
    },
    {
      name: "Solomon Islands",
      dial_code: "+677",
      code: "SB",
    },
    {
      name: "Somalia",
      dial_code: "+252",
      code: "SO",
    },
    {
      name: "South Africa",
      dial_code: "+27",
      code: "ZA",
    },
    {
      name: "South Sudan",
      dial_code: "+211",
      code: "SS",
    },
    {
      name: "South Georgia and the South Sandwich Islands",
      dial_code: "+500",
      code: "GS",
    },
    {
      name: "Spain",
      dial_code: "+34",
      code: "ES",
    },
    {
      name: "Sri Lanka",
      dial_code: "+94",
      code: "LK",
    },
    {
      name: "Sudan",
      dial_code: "+249",
      code: "SD",
    },
    {
      name: "Suriname",
      dial_code: "+597",
      code: "SR",
    },
    {
      name: "Svalbard and Jan Mayen",
      dial_code: "+47",
      code: "SJ",
    },
    {
      name: "Swaziland",
      dial_code: "+268",
      code: "SZ",
    },
    {
      name: "Sweden",
      dial_code: "+46",
      code: "SE",
    },
    {
      name: "Switzerland",
      dial_code: "+41",
      code: "CH",
    },
    {
      name: "Syrian Arab Republic",
      dial_code: "+963",
      code: "SY",
    },
    {
      name: "Taiwan",
      dial_code: "+886",
      code: "TW",
    },
    {
      name: "Tajikistan",
      dial_code: "+992",
      code: "TJ",
    },
    {
      name: "Tanzania, United Republic of Tanzania",
      dial_code: "+255",
      code: "TZ",
    },
    {
      name: "Thailand",
      dial_code: "+66",
      code: "TH",
    },
    {
      name: "Timor-Leste",
      dial_code: "+670",
      code: "TL",
    },
    {
      name: "Togo",
      dial_code: "+228",
      code: "TG",
    },
    {
      name: "Tokelau",
      dial_code: "+690",
      code: "TK",
    },
    {
      name: "Tonga",
      dial_code: "+676",
      code: "TO",
    },
    {
      name: "Trinidad and Tobago",
      dial_code: "+1868",
      code: "TT",
    },
    {
      name: "Tunisia",
      dial_code: "+216",
      code: "TN",
    },
    {
      name: "Turkey",
      dial_code: "+90",
      code: "TR",
    },
    {
      name: "Turkmenistan",
      dial_code: "+993",
      code: "TM",
    },
    {
      name: "Turks and Caicos Islands",
      dial_code: "+1649",
      code: "TC",
    },
    {
      name: "Tuvalu",
      dial_code: "+688",
      code: "TV",
    },
    {
      name: "Uganda",
      dial_code: "+256",
      code: "UG",
    },
    {
      name: "Ukraine",
      dial_code: "+380",
      code: "UA",
    },
    {
      name: "United Arab Emirates",
      dial_code: "+971",
      code: "AE",
    },
    {
      name: "United Kingdom",
      dial_code: "+44",
      code: "GB",
    },
    {
      name: "United States",
      dial_code: "+1",
      code: "US",
    },
    {
      name: "Uruguay",
      dial_code: "+598",
      code: "UY",
    },
    {
      name: "Uzbekistan",
      dial_code: "+998",
      code: "UZ",
    },
    {
      name: "Vanuatu",
      dial_code: "+678",
      code: "VU",
    },
    {
      name: "Venezuela, Bolivarian Republic of Venezuela",
      dial_code: "+58",
      code: "VE",
    },
    {
      name: "Vietnam",
      dial_code: "+84",
      code: "VN",
    },
    {
      name: "Virgin Islands, British",
      dial_code: "+1284",
      code: "VG",
    },
    {
      name: "Virgin Islands, U.S.",
      dial_code: "+1340",
      code: "VI",
    },
    {
      name: "Wallis and Futuna",
      dial_code: "+681",
      code: "WF",
    },
    {
      name: "Yemen",
      dial_code: "+967",
      code: "YE",
    },
    {
      name: "Zambia",
      dial_code: "+260",
      code: "ZM",
    },
    {
      name: "Zimbabwe",
      dial_code: "+263",
      code: "ZW",
    },
  ]);

  let passwordError = false;
  if (password.length < 6 && password.length != 0) {
    passwordError = true;
  }

  function checkStrength(password) {
    let passwords = document.getElementById("password2");
    let passwordStrength = document.getElementById("password-strength");
    let lowUpperCase = document.querySelector(".low-upper-case i");
    let number = document.querySelector(".one-number i");
    let specialChar = document.querySelector(".one-special-char i");
    let eightChar = document.querySelector(".eight-character i");
    let strength = 0;

    //If password contains both lower and uppercase characters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      strength += 1;
      lowUpperCase.classList.remove("fa-circle");
      lowUpperCase.classList.add("fa-check");
      lowUpperCase.style.color = "#00c400";
    } else {
      lowUpperCase.classList.add("fa-circle");
      lowUpperCase.classList.remove("fa-check");
      lowUpperCase.style.color = "red";
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
      strength += 1;
      number.classList.remove("fa-circle");
      number.classList.add("fa-check");
      number.style.color = "#00c400";
    } else {
      number.classList.add("fa-circle");
      number.classList.remove("fa-check");
      number.style.color = "red";
    }
    //If it has one special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      strength += 1;
      specialChar.classList.remove("fa-circle");
      specialChar.classList.add("fa-check");
      specialChar.style.color = "#00c400";
    } else {
      specialChar.classList.add("fa-circle");
      specialChar.classList.remove("fa-check");
      specialChar.style.color = "red";
    }
    //If password is greater than 7
    if (password.length > 7) {
      strength += 1;
      eightChar.classList.remove("fa-circle");
      eightChar.classList.add("fa-check");
      eightChar.style.color = "#00c400";
    } else {
      eightChar.classList.add("fa-circle");
      eightChar.classList.remove("fa-check");
      eightChar.style.color = "red";
    }

    // If value is less than 2
    if (strength < 2) {
      passwordStrength.classList.remove("progress-bar-warning");
      passwordStrength.classList.remove("progress-bar-success");
      passwordStrength.classList.add("progress-bar-danger");
      passwordStrength.style = "width: 10%";
    } else if (strength == 3) {
      passwordStrength.classList.remove("progress-bar-success");
      passwordStrength.classList.remove("progress-bar-danger");
      passwordStrength.classList.add("progress-bar-warning");
      passwordStrength.style = "width: 60%";
    } else if (strength == 4) {
      passwordStrength.classList.remove("progress-bar-warning");
      passwordStrength.classList.remove("progress-bar-danger");
      passwordStrength.classList.add("progress-bar-success");
      passwordStrength.style = "width: 100%";
    }
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const resendActivation = async () => {
    setResend(true);

    fetch(
      `${process.env.REACT_APP_BASE_URL}/auth/resend_email/${email}?tenant=${
        window.location.hostname.split(".")[0]
      }`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        alert(data);
        setResend(false);
      })
      .catch((e) => {
        alert(e);
      });
  };

  const register = async (e) => {
    e.preventDefault();
    if (passwordError || password !== conformPassword) return;

    setLoader(true);
    const data = {
      email: email,
      username: userName,
      name: firstName + lastName,
      password: password,
      phone_number: countryCode
        ? countryCode.split(".")[1] + phone
        : "+91" + phone,
    };

    const header = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": true,
      },
      body: JSON.stringify(data),
    };

    const api = await fetch(
      `${process.env.REACT_APP_BASE_URL}/auth/register?tenant=${
        window.location.hostname.split(".")[0]
      }`,
      header
    );
    const registers = await api.json();

    if (api.ok) {
      setLoader(false);
      setOpenModal(true);
    } else {
      setLoader(false);
      setErrors(registers);
    }
  };

  return (
    <div className="authentication">
      <div className="logo-update">
        <img src={Logo} alt="logo" />
        <hr />
      </div>
      <div className="left signup-temp-sec">
        <div className="left-inner">
          <div className="sign-up-form">
            <div className="seperator" style={{ width: "75%", margin: "auto" }}>
              <span>Register to varency drive</span>
            </div>

            <form onSubmit={register}>
              <div className="register-input-wrapper">
                <div className="form-group">
                  <label htmlFor="">First Name</label>
                  <input
                    type="input"
                    name="name"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="input"
                    name="name"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Username</label>
                <input
                  type="input"
                  name="name"
                  className={error?.username ? "error" : ""}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  placeholder="User Name"
                  required
                />
              </div>
              <div className="error-text" style={{ textAlign: "left" }}>
                {error?.username && error.username}
              </div>
              <div className="register-input-wrapper" style={{ gap: "10px" }}>
                <div className="country">
                  <div className="country-code-flag">
                    <img
                      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${
                        countryCode ? countryCode.split(".")[0] : "IN"
                      }.svg`}
                      alt=""
                    />
                  </div>

                  <div className="form-group ">
                    <label>Country</label>

                    <select
                      name=""
                      id=""
                      onChange={(e) => {
                        setCountryCode(e.target.value);
                      }}
                      className="country-code"
                    >
                      {country?.map((code) => {
                        return (
                          <>
                            <option value={`${code.code}.${code.dial_code}`}>
                              {code.name}&nbsp;&nbsp;&nbsp;
                              {code.dial_code}
                            </option>
                          </>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="form-group " style={{ width: "60px" }}>
                  <label>Code</label>
                  <input
                    type="text"
                    name="country code"
                    value={countryCode ? countryCode.split(".")[1] : "+91"}
                    disabled
                    required
                  />
                </div>

                <div className="form-group" style={{ flexGrow: "2" }}>
                  <label htmlFor="">Phone No.</label>
                  <input
                    type="number"
                    name="phone"
                    className={error?.phone_number ? "error" : ""}
                    min="0"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
              <div className="error-text" style={{ textAlign: "left" }}>
                {error && error.phone_number && error.phone_number}
              </div>

              <div className="form-group">
                <label htmlFor="">E-mail</label>
                <input
                  type="email"
                  name="email"
                  className={error?.email ? "error" : ""}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="error-text" style={{ textAlign: "left" }}>
                {error?.email && error.email}
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  id="password2"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className={passwordError ? "error" : ""}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    checkStrength(e.target.value);
                  }}
                  placeholder="Password"
                  required
                  minLength="8"
                />
              </div>

              {password.length !== 0 && (
                <div id="popover-password">
                  <p>
                    <span id="result"></span>
                  </p>
                  <div className="progress">
                    <div
                      id="password-strength"
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "0" }}
                    ></div>
                  </div>
                  <ul className="list-unstyled">
                    <li className="">
                      <span className="low-upper-case">
                        &nbsp;Lowercase &amp; Uppercase
                        <i
                          className="fas fa-circle"
                          style={{
                            fontSize: "13px",
                          }}
                          aria-hidden="true"
                        ></i>
                      </span>
                    </li>
                    <li className="">
                      <span className="one-number">
                        &nbsp;Number (0-9)
                        <i
                          className="fas fa-circle"
                          style={{
                            fontSize: "13px",
                          }}
                          aria-hidden="true"
                        ></i>
                      </span>
                    </li>
                    <li className="">
                      <span className="one-special-char">
                        &nbsp;Special Character (!@#$%^&*)
                        <i
                          style={{
                            fontSize: "13px",
                          }}
                          className="fas fa-circle"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </li>
                    <li className="">
                      <span className="eight-character">
                        &nbsp;Atleast 8 Characters
                        <i
                          className="fas fa-circle"
                          style={{
                            fontSize: "13px",
                          }}
                          aria-hidden="true"
                        ></i>
                      </span>
                    </li>
                  </ul>
                </div>
              )}

              <div className="form-group" style={{ position: "relative" }}>
                <label htmlFor="">Confirm Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className={password !== conformPassword ? "error" : ""}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  placeholder="Confirm password"
                  required
                  minLength="6"
                />
                {showPassword ? (
                  <BsEyeSlashFill
                    className="showPassword"
                    style={{ position: "absolute" }}
                    onClick={togglePassword}
                  />
                ) : (
                  <BsEyeFill
                    className="showPassword"
                    onClick={togglePassword}
                  />
                )}
              </div>

              <div
                className="error-text form-group"
                style={{ textAlign: "left" }}
              >
                {password !== conformPassword ? "Password do not match" : ""}
              </div>
              <div
                className="form-group"
                style={{ display: "flex", alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  style={{ width: "40px" }}
                  name="policy"
                  required
                />
                <label htmlFor="" style={{ marginTop: "3px" }}>
                  I agree to the Terms and Conditions & Privacy Policy
                </label>
              </div>
              <div className="form-group">
                {loader ? (
                  <Loader size={50} />
                ) : (
                  <button className="login-signup-btn" type="submit">
                    Sign Up
                  </button>
                )}
              </div>
              <div className="create-aacount">
                Already registered?
                <Link to="/Authentication/login" style={{ marginLeft: "10px" }}>
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {openModal ? (
        <Verification open={openModal}>
          <h1>
            Hi,{" "}
            <span
              style={{
                textTransform: "capitalize",
                fontWeight: "bold",
                wordBreak: "break-word",
              }}
            >
              {firstName}
            </span>
          </h1>
          <p>
            We have sent a verification link to your mail, Check your registered
            email. <br /> Verify your email address:
            <span
              style={{
                fontWeight: "bold",
                color: "black",
                wordBreak: "break-word",
              }}
            >
              {email}
            </span>
          </p>
          {resend ? (
            <p className="activation-resend">Please Wait ...</p>
          ) : (
            <p className="activation-resend" onClick={resendActivation}>
              Resend Activation Link
            </p>
          )}

          <Link
            to="/Authentication/login"
            style={{ textDecoration: "none" }}
            className="back-to-signin"
            onClick={() => setOpenModal(false)}
          >
            Back to signin
          </Link>
        </Verification>
      ) : null}
    </div>
  );
}

export default Register;
