
// Chart area
var container = document.getElementById('chart-area');
var data = {
    categories: ['27 Aug', '28 Aug', '29 Aug', '30 Aug', '31 Aug', '1 Aug', '2 Aug'],
    series: {
        column: [
            {
                name: 'Page View',
                data: [11.3, 17.0, 21.0, 24.4, 25.2, 20.4, 13.9]
            },
            {
                name: 'Visitor',
                data: [9.9, 16.0, 21.2, 24.2, 23.2, 19.4, 13.3]
            },
            {
                name: 'Unique',
                data: [18.3, 15.2, 12.8, 11.8, 13.0, 15.2, 17.6]
            }
        ],
        line: [
            {
                name: 'Average',
                data: [11, 15.1, 17.8, 19.7, 19.5, 16.5, 12.3]
            }
        ]
    }
};
var options = {
    chart: {
        width: 1008,
        height: 540
    },
    yAxis: [{
       title: 'Amout',
       chartType: 'column',
       labelMargin: 15
    }],
    xAxis: {
        title: 'The last seven days'
    },
    series: {
        line: {
            showDot: true
        }
    },
    tooltip: {
        grouped: true,
        suffix: '°C'
    },
    theme: 'myTheme',
    legend: {
        align: 'bottom'
    }
};

var theme = {
    series: {
        column: {
            colors: [
                '#33ffe0', '#00d1b2', '#00947e', '#3273dc', '#48c774'
            ]
        },
        line: {
            colors: ['#393836']
        }
    }
};
// For apply theme
tui.chart.registerTheme('myTheme', theme);
// options.theme = 'myTheme';
var chart = tui.chart.comboChart(container, data, options);

// Chart Views by Country

var container3 = document.getElementById('chart-country');
var data3 = {
    categories: ['India', 'United States', 'Indonesia', 'Brazil', 'Mexico', 'Pakistan'],
    series: [
        {
            name: 'Views',
            data: [5000, 3000, 5000, 7000, 6000, 4000]
        }
    ]
};
var options3 = {
    chart: {
        width: 465,
        height: 400,
        //title: 'Monthly Revenue',
        format: '1,000'
    },
    yAxis: {
        title: 'Country'
    },
    xAxis: {
        title: 'Amount',
        min: 0,
        max: 9000,
        suffix: ''
    },
     series: {
         showLabel: true
     },
    theme: 'hbarTheme',
    legend: {
        align: 'bottom'
    }
};
var hbartheme = {
    series: {
        colors: [
            '#00d1b2', '#33ffe0', '#3298dc', '#3273dc', '#48c774',
            '#289399', '#617178', '#8a9a9a', '#516f7d', '#dddddd'
        ]
    }
};

// For apply theme

tui.chart.registerTheme('hbarTheme', hbartheme);
// options.theme = 'myTheme';

tui.chart.barChart(container3, data3, options3);

// Chart Map 

var container2 = document.getElementById('chart-demographic');
var data2 = {
    series: [
        {
            code: 'AE',
            data: 108.6858732
        },
        {
            code: 'AF',
            data: 48.44454554
        },
        {
            code: 'AL',
            data: 105.6377737
        },
        {
            code: 'AM',
            data: 105.5902353
        },
        {
            code: 'AO',
            data: 19.43332317
        },
        {
            code: 'AR',
            data: 15.70511311
        },
        {
            code: 'AT',
            data: 103.409531
        },
        {
            code: 'AU',
            data: 3.057773844
        },
        {
            code: 'AZ',
            data: 115.3875924
        },
        {
            code: 'BA',
            data: 74.56160156
        },
        {
            code: 'BE',
            data: 370.7135733
        },
        {
            code: 'BF',
            data: 64.28800439
        },
        {
            code: 'BG',
            data: 66.54327561
        },
        {
            code: 'BI',
            data: 421.2172897
        },
        {
            code: 'BJ',
            data: 93.99150408
        },
        {
            code: 'BN',
            data: 79.20189753
        },
        {
            code: 'BO',
            data: 9.749734146
        },
        {
            code: 'BR',
            data: 24.65595192
        },
        {
            code: 'BS',
            data: 38.26713287
        },
        {
            code: 'BT',
            data: 20.06999502
        },
        {
            code: 'BW',
            data: 3.917098089
        },
        {
            code: 'BY',
            data: 46.67093785
        },
        {
            code: 'BZ',
            data: 15.41893906
        },
        {
            code: 'CA',
            data: 3.908327917
        },
        {
            code: 'CD',
            data: 33.02839814
        },
        {
            code: 'CF',
            data: 7.711830235
        },
        {
            code: 'CG',
            data: 13.1916896
        },
        {
            code: 'CH',
            data: 207.2636147
        },
        {
            code: 'CI',
            data: 69.67643711
        },
        {
            code: 'CL',
            data: 23.88955284
        },
        {
            code: 'CM',
            data: 48.17544372
        },
        {
            code: 'CN',
            data: 145.317356
        },
        {
            code: 'CO',
            data: 43.07471203
        },
        {
            code: 'CR',
            data: 93.17677242
        },
        {
            code: 'CU',
            data: 106.8973029
        },
        {
            code: 'CY',
            data: 124.8547619
        },
        {
            code: 'CZ',
            data: 136.0943416
        },
        {
            code: 'DE',
            data: 232.0809807
        },
        {
            code: 'DJ',
            data: 37.79870578
        },
        {
            code: 'DK',
            data: 132.9145652
        },
        {
            code: 'DO',
            data: 215.3547806
        },
        {
            code: 'DZ',
            data: 16.34701269
        },
        {
            code: 'EC',
            data: 64.03171203
        },
        {
            code: 'EE',
            data: 30.98950224
        },
        {
            code: 'EG',
            data: 89.9891205
        },
        {
            code: 'ER',
            data: 50.59845545
        },
        {
            code: 'ES',
            data: 92.7702405
        },
        {
            code: 'ET',
            data: 96.958732
        },
        {
            code: 'FI',
            data: 17.97886077
        },
        {
            code: 'FJ',
            data: 48.51943076
        },
        {
            code: 'FK',
            data: 34.54226361
        },
        {
            code: 'FR',
            data: 120.9133113
        },
        {
            code: 'GA',
            data: 6.549745799
        },
        {
            code: 'GB',
            data: 266.6489315
        },
        {
            code: 'GE',
            data: 78.80086777
        },
        {
            code: 'GH',
            data: 117.7225894
        },
        {
            code: 'GL',
            data: 0.137154343
        },
        {
            code: 'GM',
            data: 190.5336957
        },
        {
            code: 'GN',
            data: 49.95737832
        },
        {
            code: 'GQ',
            data: 29.26506239
        },
        {
            code: 'GR',
            data: 85.00961986
        },
        {
            code: 'GT',
            data: 149.4540314
        },
        {
            code: 'GW',
            data: 64.02962304
        },
        {
            code: 'GY',
            data: 3.880584201
        },
        {
            code: 'HN',
            data: 71.15631424
        },
        {
            code: 'HR',
            data: 75.73961758
        },
        {
            code: 'HT',
            data: 383.6004717
        },
        {
            code: 'HU',
            data: 108.9326522
        },
        {
            code: 'ID',
            data: 140.460914
        },
        {
            code: 'IE',
            data: 66.95774423
        },
        {
            code: 'IL',
            data: 379.6349353
        },
        {
            code: 'IN',
            data: 435.6571706
        },
        {
            code: 'IQ',
            data: 80.15363327
        },
        {
            code: 'IR',
            data: 47.98357066
        },
        {
            code: 'IS',
            data: 3.267720698
        },
        {
            code: 'IT',
            data: 208.5278677
        },
        {
            code: 'JM',
            data: 251.2698061
        },
        {
            code: 'JO',
            data: 74.4199144
        },
        {
            code: 'JP',
            data: 348.7266842
        },
        {
            code: 'KE',
            data: 78.82697227
        },
        {
            code: 'KG',
            data: 30.4181439
        },
        {
            code: 'KH',
            data: 86.8351235
        },
        {
            code: 'KP',
            data: 207.8462918
        },
        {
            code: 'KR',
            data: 517.3491782
        },
        {
            code: 'KW',
            data: 210.6128507
        },
        {
            code: 'KZ',
            data: 6.40408601
        },
        {
            code: 'LA',
            data: 28.98310225
        },
        {
            code: 'LB',
            data: 444.4549365
        },
        {
            code: 'LK',
            data: 329.118163
        },
        {
            code: 'LR',
            data: 45.64528654
        },
        {
            code: 'LS',
            data: 69.47289196
        },
        {
            code: 'LT',
            data: 46.73830076
        },
        {
            code: 'LU',
            data: 214.7003861
        },
        {
            code: 'LV',
            data: 32.00435761
        },
        {
            code: 'LY',
            data: 3.557170624
        },
        {
            code: 'MA',
            data: 76.00538427
        },
        {
            code: 'MD',
            data: 123.8430198
        },
        {
            code: 'ME',
            data: 46.23048327
        },
        {
            code: 'MG',
            data: 40.51514782
        },
        {
            code: 'MK',
            data: 82.30075337
        },
        {
            code: 'ML',
            data: 14.00275531
        },
        {
            code: 'MM',
            data: 81.8232973
        },
        {
            code: 'MN',
            data: 1.873034192
        },
        {
            code: 'MR',
            data: 3.851387407
        },
        {
            code: 'MW',
            data: 177.0815974
        },
        {
            code: 'MX',
            data: 64.50054425
        },
        {
            code: 'MY',
            data: 91.01201339
        },
        {
            code: 'MZ',
            data: 34.60957298
        },
        {
            code: 'NA',
            data: 2.918604623
        },
        {
            code: 'NC',
            data: 14.55142232
        },
        {
            code: 'NE',
            data: 15.08938817
        },
        {
            code: 'NG',
            data: 194.8636714
        },
        {
            code: 'NI',
            data: 49.97434768
        },
        {
            code: 'NL',
            data: 500.5697357
        },
        {
            code: 'NO',
            data: 14.06309464
        },
        {
            code: 'NP',
            data: 196.5449878
        },
        {
            code: 'NZ',
            data: 17.12696062
        },
        {
            code: 'OM',
            data: 13.68677544
        },
        {
            code: 'PA',
            data: 52.02495292
        },
        {
            code: 'PE',
            data: 24.19777188
        },
        {
            code: 'PG',
            data: 16.48098088
        },
        {
            code: 'PH',
            data: 332.490492
        },
        {
            code: 'PK',
            data: 240.0429198
        },
        {
            code: 'PL',
            data: 124.0832403
        },
        {
            code: 'PR',
            data: 400.0447576
        },
        {
            code: 'PT',
            data: 113.5086572
        },
        {
            code: 'PY',
            data: 16.49262019
        },
        {
            code: 'QA',
            data: 187.085702
        },
        {
            code: 'RO',
            data: 86.55825327
        },
        {
            code: 'RS',
            data: 81.5164418
        },
        {
            code: 'RU',
            data: 8.781871566
        },
        {
            code: 'RW',
            data: 459.7301986
        },
        {
            code: 'SA',
            data: 14.36790654
        },
        {
            code: 'SB',
            data: 20.44197928
        },
        {
            code: 'SD',
            data: 21.57468771
        },
        {
            code: 'SE',
            data: 23.78738891
        },
        {
            code: 'SI',
            data: 102.394141
        },
        {
            code: 'SK',
            data: 112.6789636
        },
        {
            code: 'SL',
            data: 87.49829593
        },
        {
            code: 'SN',
            data: 76.20919857
        },
        {
            code: 'SO',
            data: 16.76534096
        },
        {
            code: 'SR',
            data: 3.450307692
        },
        {
            code: 'SV',
            data: 294.7734556
        },
        {
            code: 'SY',
            data: 120.6654686
        },
        {
            code: 'SZ',
            data: 73.7855814
        },
        {
            code: 'TG',
            data: 130.8174848
        },
        {
            code: 'TH',
            data: 132.5646989
        },
        {
            code: 'TJ',
            data: 59.27293512
        },
        {
            code: 'TL',
            data: 81.5135844
        },
        {
            code: 'TM',
            data: 11.29357138
        },
        {
            code: 'TN',
            data: 70.78141092
        },
        {
            code: 'TR',
            data: 98.66084742
        },
        {
            code: 'TT',
            data: 264.0317739
        },
        {
            code: 'TZ',
            data: 58.50374915
        },
        {
            code: 'UG',
            data: 188.4249501
        },
        {
            code: 'US',
            data: 34.85759438
        },
        {
            code: 'UY',
            data: 19.53785853
        },
        {
            code: 'UZ',
            data: 72.30300893
        },
        {
            code: 'VE',
            data: 34.79828468
        },
        {
            code: 'VN',
            data: 292.6113458
        },
        {
            code: 'VU',
            data: 21.23732568
        },
        {
            code: 'XK',
            data: 167.4611004
        },
        {
            code: 'YE',
            data: 49.59311325
        },
        {
            code: 'ZA',
            data: 44.51603179
        },
        {
            code: 'ZM',
            data: 21.1481766
        },
        {
            code: 'ZW',
            data: 39.41024945
        }
    ]
};
var options2 = {
    chart: {
        width: 468,
        height: 400,
        //title: 'Population density of World (per ㎢)',
        format: '0.00'
    },
    map: 'world',
    legend: {
        align: 'bottom'
    },
    theme: 'mapTheme'
};
var maptheme = {
    series: {
        startColor: '#33ffe0',
        endColor: '#00947e',
        overColor: '#75b5aa'
    }
};

// For apply theme

tui.chart.registerTheme('mapTheme', maptheme);
// options.theme = 'myTheme';

tui.chart.mapChart(container2, data2, options2);

