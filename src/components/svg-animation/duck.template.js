import "./svg-animation.component.scss";

export const duckTemplate = () => {
  return `

  <svg id="svg-duck" class="duck" version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt"
  height="100.000000pt" viewBox="0 0 1002.000000 1002.000000" preserveAspectRatio="xMidYMid meet">
  <g transform="translate(0.000000,1002.000000) scale(0.100000,-0.100000)" fill="none"
    stroke="rgba(85, 53, 92, 1)" stroke-width="100" stroke-dasharray="51127" stroke-dashoffset="0">
    <path id="duck-hunt-logo10" d="M4063 7797 c-3 -4 -11 -6 -17 -4 -17 7 -23 1 -76 -56 -42 -46 -44
-52 -46 -110 0 -34 3 -67 8 -74 5 -7 5 -14 -2 -18 -6 -3 -8 -11 -5 -16 4 -5 8
-19 10 -30 2 -12 12 -33 22 -48 9 -14 16 -28 16 -31 0 -3 8 -22 18 -42 11 -21
16 -38 12 -38 -5 0 1 -7 11 -15 11 -8 17 -15 13 -15 -4 0 -2 -10 5 -22 7 -13
12 -27 13 -31 0 -4 7 -12 15 -17 8 -5 11 -12 7 -16 -4 -4 0 -18 8 -31 9 -13
13 -28 10 -33 -3 -6 -1 -10 4 -10 6 0 10 -3 10 -7 -1 -5 0 -11 1 -15 1 -5 4
-12 5 -18 1 -5 4 -12 5 -15 1 -3 3 -10 4 -15 0 -6 8 -15 16 -20 8 -5 11 -10 6
-10 -5 0 -3 -7 4 -15 7 -9 10 -18 7 -22 -4 -3 3 -19 14 -34 11 -16 17 -29 13
-29 -3 0 -1 -7 6 -15 7 -8 9 -15 5 -15 -4 0 -2 -7 5 -15 7 -8 9 -15 5 -15 -4
0 -2 -7 5 -15 7 -8 10 -15 6 -15 -4 0 0 -13 9 -30 9 -16 12 -30 9 -30 -4 0 1
-9 10 -19 10 -11 15 -24 12 -29 -3 -5 4 -22 15 -36 12 -15 19 -30 15 -33 -3
-4 1 -17 9 -30 9 -13 13 -23 9 -23 -4 0 -1 -7 6 -15 6 -8 9 -19 6 -24 -4 -5
-2 -12 4 -16 6 -4 8 -11 5 -16 -4 -5 -2 -9 3 -9 5 0 9 -7 10 -15 1 -8 3 -22 4
-30 1 -8 6 -15 11 -15 6 0 7 -3 4 -7 -4 -3 -2 -12 4 -20 6 -7 9 -13 5 -13 -4
0 1 -14 9 -30 9 -17 13 -34 11 -39 -3 -5 3 -20 14 -33 10 -14 19 -33 19 -44 0
-18 7 -56 11 -61 2 -2 4 -7 5 -13 1 -5 4 -12 5 -15 1 -3 3 -10 4 -15 0 -6 6
-14 13 -18 7 -4 10 -16 9 -27 -2 -11 1 -26 7 -33 5 -7 7 -15 3 -19 -3 -3 0
-16 7 -27 8 -12 13 -31 12 -43 -1 -13 3 -23 8 -23 6 0 7 -3 4 -7 -4 -3 -2 -12
4 -20 6 -7 8 -13 4 -13 -4 0 -2 -7 5 -15 7 -8 9 -15 5 -15 -4 0 -2 -7 5 -15 7
-8 10 -21 7 -30 -4 -8 -2 -17 4 -21 6 -3 8 -12 5 -20 -3 -7 -1 -16 5 -19 5 -4
7 -10 4 -15 -3 -5 -1 -11 5 -15 6 -3 8 -17 6 -30 -3 -14 0 -27 5 -30 5 -4 9
-18 8 -33 0 -28 3 -46 16 -74 4 -10 5 -24 2 -32 -3 -7 0 -19 6 -25 6 -6 7 -11
3 -11 -5 0 -3 -7 4 -15 7 -8 10 -21 7 -30 -4 -8 -2 -17 3 -20 5 -3 7 -15 5
-27 -3 -12 0 -27 6 -34 6 -7 9 -23 8 -36 -2 -13 0 -28 4 -35 4 -7 6 -23 3 -37
-3 -14 0 -28 5 -31 12 -8 12 -45 -1 -46 -35 -5 -76 -5 -85 0 -5 3 -23 4 -38 2
-15 -1 -35 3 -43 9 -7 7 -14 9 -14 5 0 -4 -6 -3 -13 3 -7 6 -22 10 -32 8 -11
-2 -30 4 -42 12 -13 8 -23 11 -23 8 0 -4 -13 0 -30 9 -16 9 -30 12 -30 9 0 -4
-11 3 -25 16 -14 13 -25 20 -25 16 0 -9 -120 73 -137 94 -7 8 -13 12 -13 8 0
-5 -44 34 -97 85 -115 110 -276 254 -280 250 -1 -1 -19 14 -39 32 -20 19 -40
32 -44 30 -4 -2 -18 7 -31 21 -26 28 -129 90 -143 86 -4 -2 -13 4 -20 13 -6 9
-18 17 -26 19 -8 1 -24 7 -35 13 -11 6 -23 11 -27 12 -5 1 -10 2 -13 2 -3 1
-8 2 -12 3 -5 1 -21 9 -38 18 -16 8 -39 14 -49 12 -11 -1 -24 0 -30 3 -5 4
-38 5 -72 4 -35 -1 -69 1 -75 5 -14 9 -109 8 -132 -1 -9 -4 -24 -2 -32 5 -11
10 -18 10 -29 1 -8 -7 -26 -10 -40 -7 -14 3 -28 0 -32 -5 -3 -6 -12 -8 -20 -5
-7 3 -16 1 -19 -5 -4 -5 -11 -7 -16 -4 -5 4 -9 2 -9 -4 0 -5 -8 -8 -17 -6 -10
1 -27 -2 -38 -8 -11 -6 -22 -11 -25 -12 -21 -1 -156 -92 -154 -103 0 -4 -20
-23 -45 -43 -43 -35 -110 -109 -113 -126 -1 -5 -16 -30 -34 -57 -19 -26 -31
-52 -28 -58 3 -5 -2 -18 -12 -29 -9 -10 -13 -19 -8 -19 5 0 4 -4 -1 -8 -6 -4
-25 -29 -43 -57 -53 -82 -54 -83 -79 -80 -13 1 -26 -2 -29 -7 -3 -5 -11 -5
-17 0 -15 11 -347 10 -365 -1 -7 -5 -28 -7 -46 -6 -19 2 -41 -3 -49 -10 -9 -7
-21 -10 -26 -7 -5 4 -12 2 -16 -4 -4 -6 -10 -8 -15 -5 -13 8 -136 -129 -137
-153 -7 -107 -3 -265 8 -278 6 -8 8 -14 5 -14 -4 0 6 -17 21 -37 35 -46 139
-124 157 -117 7 3 18 -1 25 -9 7 -10 24 -13 51 -10 23 3 46 1 53 -4 7 -5 31
-8 54 -7 24 1 45 -1 47 -5 3 -4 53 -5 111 -3 59 2 114 0 123 -4 25 -11 36 -11
50 -1 7 6 17 6 25 0 6 -5 67 -8 135 -7 67 1 125 -2 127 -6 3 -4 23 -6 44 -4
22 2 43 -1 46 -6 4 -6 10 -8 15 -5 5 3 11 1 14 -4 3 -5 15 -7 26 -4 12 3 29
-2 40 -12 11 -10 20 -15 20 -10 0 4 7 2 15 -5 8 -7 15 -9 15 -5 0 4 6 2 13 -4
8 -6 17 -8 20 -5 3 4 14 3 24 -1 10 -5 20 -9 23 -9 3 -1 15 -7 26 -14 12 -6
24 -8 28 -5 3 3 6 2 6 -4 0 -9 14 -13 55 -14 10 0 25 -5 32 -11 7 -6 13 -7 13
-3 0 4 7 2 15 -5 8 -7 15 -9 15 -5 0 4 7 2 15 -5 8 -7 15 -9 15 -5 0 4 6 2 13
-4 8 -6 17 -8 20 -5 3 3 12 2 19 -2 7 -5 21 -9 31 -10 9 -1 19 -3 22 -4 3 -1
10 -4 15 -5 6 -1 13 -4 18 -5 4 -1 17 -1 28 -1 12 1 24 -5 27 -13 4 -10 15
-13 32 -10 14 2 36 -2 48 -11 13 -8 27 -12 30 -9 4 4 12 2 19 -4 7 -5 28 -9
46 -7 17 1 32 -1 32 -6 0 -5 7 -6 15 -3 8 3 20 2 27 -2 16 -10 44 -15 85 -15
17 0 37 -6 43 -14 6 -8 18 -11 26 -8 8 3 21 0 29 -7 8 -7 15 -9 15 -5 0 4 7 2
15 -5 8 -7 15 -9 15 -6 0 4 13 -2 30 -14 16 -12 30 -18 30 -14 0 4 9 -1 20
-11 11 -10 20 -15 20 -12 0 4 9 -1 20 -11 12 -9 22 -15 23 -13 2 5 143 -133
174 -171 13 -16 20 -28 17 -28 -7 0 78 -91 221 -234 105 -107 302 -279 351
-308 16 -10 49 -33 74 -51 25 -19 48 -32 53 -30 4 2 7 0 7 -5 0 -16 260 -171
260 -154 0 4 5 -1 11 -10 6 -10 16 -15 26 -11 9 4 19 -1 25 -11 5 -9 13 -14
17 -11 5 2 16 -4 26 -15 10 -11 22 -17 26 -14 5 3 9 0 9 -5 0 -6 3 -10 8 -9 4
1 17 -3 28 -10 12 -6 24 -8 28 -5 3 3 15 -2 26 -12 11 -10 20 -15 20 -10 0 4
7 1 16 -6 9 -8 22 -14 28 -14 6 0 26 -8 44 -18 18 -10 37 -15 42 -12 6 3 10 1
10 -5 0 -6 4 -9 9 -5 5 3 12 1 16 -5 4 -6 10 -8 15 -5 5 3 21 -2 35 -11 14 -9
25 -13 25 -10 0 4 11 -1 25 -10 14 -9 25 -13 25 -8 0 4 5 3 11 -3 6 -6 17 -9
25 -6 7 2 23 -2 35 -10 12 -9 27 -13 34 -11 7 3 16 1 19 -5 4 -6 13 -8 21 -4
9 3 22 0 30 -7 8 -7 15 -9 15 -5 0 4 6 2 13 -4 8 -6 17 -8 20 -5 3 3 12 2 19
-2 7 -5 26 -7 41 -5 15 1 35 -3 43 -10 9 -7 31 -12 49 -11 18 2 36 -2 39 -7 3
-5 15 -7 25 -4 10 3 22 0 25 -6 4 -5 13 -8 21 -4 9 3 21 1 28 -4 6 -4 21 -8
32 -8 10 0 43 -24 73 -54 30 -30 70 -67 89 -82 19 -15 34 -30 33 -34 0 -3 17
-20 37 -38 21 -17 46 -42 57 -55 10 -13 20 -21 23 -18 3 2 18 -11 35 -30 16
-18 60 -57 96 -86 36 -29 78 -64 92 -77 14 -13 49 -44 79 -70 30 -25 66 -56
79 -68 14 -13 29 -20 34 -17 5 3 14 2 21 -3 10 -7 52 -10 67 -3 3 1 14 3 25 5
19 4 76 61 72 74 -1 3 4 16 11 29 7 12 10 22 7 22 -4 0 3 12 15 28 12 15 23
25 25 22 2 -3 12 4 24 14 12 11 21 15 21 11 0 -4 9 0 20 10 10 9 26 15 33 12
8 -3 29 9 47 28 30 31 32 38 32 105 0 39 -5 76 -10 83 -9 10 -10 100 -2 117 1
3 2 9 1 14 -1 5 6 17 15 27 11 13 16 37 16 89 0 64 -2 74 -26 99 -19 20 -34
27 -52 23 -13 -2 -30 0 -37 5 -14 11 -77 11 -94 0 -6 -4 -14 -3 -17 1 -6 10
-36 9 -53 -1 -6 -4 -14 -3 -18 3 -4 6 -10 8 -15 5 -5 -3 -11 -1 -14 3 -3 5
-21 8 -41 5 -33 -3 -35 -2 -23 16 6 11 15 18 19 16 8 -5 130 85 212 158 34 30
94 81 132 114 39 33 108 96 155 139 47 44 100 93 119 109 18 17 56 51 85 77
54 49 123 107 176 148 52 40 81 64 101 83 10 9 19 14 19 10 0 -4 18 11 40 32
23 22 42 38 43 36 4 -7 107 61 107 70 0 6 4 8 9 4 5 -3 16 3 23 13 7 11 16 19
20 18 4 0 46 28 94 64 48 36 90 65 93 65 22 2 93 51 131 89 39 41 44 51 41 86
-1 22 1 40 6 40 5 0 27 15 48 34 22 19 53 45 69 58 26 22 28 29 28 92 0 59 -3
71 -25 94 -23 24 -33 27 -94 27 -37 -1 -74 -4 -81 -9 -7 -4 -25 -6 -40 -5 -15
1 -34 -1 -44 -5 -9 -4 -30 -5 -47 -3 -17 3 -34 1 -37 -4 -4 -6 -11 -6 -19 1
-10 8 -15 8 -20 0 -4 -6 -22 -9 -41 -7 -19 3 -37 0 -40 -5 -3 -5 -28 -7 -54
-5 -29 3 -53 0 -59 -6 -8 -8 -16 -8 -29 -1 -9 6 -26 9 -37 8 -11 -2 -27 -1
-35 2 -8 4 -36 6 -61 5 -26 -2 -50 2 -53 7 -3 6 -22 8 -41 5 -20 -3 -44 -1
-53 3 -9 4 -25 6 -35 5 -10 -1 -24 2 -30 7 -7 5 -20 8 -29 7 -10 -2 -20 1 -23
5 -3 5 -12 7 -20 3 -8 -3 -23 -2 -32 3 -10 4 -21 8 -25 9 -5 2 -11 4 -15 5 -5
1 -16 1 -26 0 -10 -1 -24 3 -31 9 -7 6 -22 9 -34 6 -12 -2 -24 0 -27 5 -3 5
-12 7 -19 4 -8 -3 -17 -1 -20 5 -4 6 -13 8 -21 4 -9 -3 -21 -1 -28 5 -13 10
-18 11 -84 15 -23 1 -44 5 -48 9 -4 4 -13 4 -20 2 -7 -3 -16 -1 -19 4 -3 6
-15 8 -26 5 -11 -3 -26 -1 -33 5 -7 6 -27 9 -46 6 -18 -3 -38 -1 -44 4 -7 5
-20 8 -29 7 -10 -2 -20 1 -23 5 -3 5 -12 7 -20 3 -9 -3 -21 -1 -28 5 -6 5 -21
8 -31 6 -11 -1 -25 0 -30 4 -6 4 -23 7 -38 8 -16 1 -29 3 -30 4 -5 4 -63 11
-91 10 -16 0 -34 3 -40 7 -13 8 -41 12 -102 16 l-40 2 -2 375 c-1 206 -3 378
-4 383 -1 4 -2 10 -3 15 -1 4 -5 12 -9 19 -4 6 -3 15 3 18 8 5 8 11 1 19 -6 7
-8 16 -4 19 3 4 1 7 -5 7 -7 0 -11 3 -10 8 0 4 -2 15 -7 25 -4 10 -5 21 -1 24
3 4 -1 15 -11 25 -9 10 -13 18 -9 18 9 0 -41 88 -65 115 -10 11 -17 23 -16 26
4 10 -76 108 -85 103 -4 -3 -8 2 -8 10 0 8 -16 27 -35 42 -29 22 -46 27 -96
27 l-61 1 -24 48 c-13 26 -21 48 -18 48 4 0 1 7 -6 15 -7 8 -9 15 -5 15 5 0 0
9 -10 20 -10 11 -15 23 -12 26 3 4 1 16 -5 28 -7 11 -13 24 -14 29 -1 4 -2 8
-4 10 -1 1 -3 10 -5 20 -2 10 -12 30 -21 45 -10 15 -19 30 -20 35 -1 4 -3 9
-4 12 -1 3 -3 8 -4 13 -1 4 -17 34 -36 67 -19 33 -33 63 -32 68 1 4 -3 7 -10
7 -6 0 -8 3 -5 6 4 4 -6 23 -22 43 -15 20 -44 61 -65 92 -65 101 -356 389
-384 382 -4 -1 -13 4 -20 10 -17 13 -51 17 -58 5 -3 -4 -11 -5 -17 -1 -24 15
-99 9 -123 -10 l-23 -18 -68 65 c-102 97 -306 236 -335 228 -5 -1 -8 2 -8 7 0
5 -9 7 -20 4 -11 -3 -20 0 -20 6 0 14 -51 40 -68 34 -7 -3 -21 2 -31 11 -10 9
-21 13 -24 10 -4 -4 -13 -1 -22 6 -8 7 -15 9 -15 5 0 -4 -6 -2 -13 4 -8 6 -17
8 -20 5 -3 -3 -12 -2 -19 2 -7 5 -24 9 -38 10 -14 1 -27 2 -30 4 -3 1 -24 1
-46 0 -23 -1 -45 4 -49 10 -5 8 -10 8 -20 0 -10 -8 -15 -8 -20 0 -5 8 -11 8
-20 0 -8 -7 -20 -8 -27 -3 -17 11 -58 11 -65 0z m178 -119 c0 -8 2 -9 5 -3 5
13 74 7 74 -6 0 -5 7 -6 16 -2 9 3 20 0 24 -7 4 -7 27 -13 51 -14 23 -2 45 -8
47 -14 2 -7 8 -10 13 -6 5 3 9 0 9 -6 0 -6 5 -8 10 -5 6 3 10 0 10 -7 0 -9 3
-9 10 2 8 12 11 11 16 -8 5 -18 9 -20 15 -10 7 11 11 10 19 -2 5 -8 10 -11 10
-6 0 5 12 -3 27 -18 17 -17 29 -23 33 -15 5 7 9 5 14 -6 3 -9 10 -13 16 -10 5
3 10 1 10 -5 0 -6 5 -8 10 -5 6 3 13 -1 16 -9 3 -9 10 -14 14 -11 5 3 15 -2
24 -10 8 -9 19 -16 23 -15 4 0 8 -6 8 -12 1 -7 6 -12 13 -10 7 1 12 -2 12 -8
0 -6 3 -9 8 -8 9 4 32 -14 92 -74 27 -26 51 -44 54 -41 3 4 6 -1 6 -11 0 -9 4
-14 10 -11 5 3 12 -5 16 -19 3 -14 11 -24 18 -23 6 1 11 -7 11 -17 0 -10 9
-22 19 -26 11 -3 23 -15 27 -26 7 -17 8 -17 8 -1 1 9 7 17 14 17 8 0 7 4 -3
10 -10 6 -11 10 -3 10 7 0 12 3 12 8 -4 23 3 42 15 42 8 0 17 7 20 16 3 8 10
12 16 9 5 -3 10 0 11 7 0 7 2 8 5 2 2 -6 18 -9 34 -6 21 3 32 -1 36 -11 3 -9
12 -13 20 -10 7 3 17 -2 20 -11 3 -9 10 -14 14 -11 4 3 15 -6 24 -20 9 -14 22
-24 29 -22 6 1 11 -4 10 -10 -2 -7 4 -13 12 -13 8 0 14 -5 12 -11 -1 -6 12
-19 28 -28 17 -10 35 -28 41 -40 6 -12 15 -21 20 -20 5 1 14 -8 20 -20 6 -11
14 -18 17 -14 4 3 7 1 7 -5 0 -6 7 -18 16 -26 10 -10 11 -16 3 -16 -9 0 -8 -4
1 -15 7 -8 16 -12 21 -9 5 3 12 -3 16 -13 4 -10 15 -27 25 -37 10 -11 18 -24
18 -28 0 -5 12 -20 26 -33 14 -13 23 -28 20 -33 -3 -6 1 -12 8 -15 9 -4 14
-18 13 -39 -1 -20 3 -33 11 -34 6 -1 17 -2 22 -3 6 0 10 -7 9 -13 -3 -27 2
-38 17 -38 11 0 15 -6 11 -20 -3 -13 0 -20 10 -20 9 0 13 -8 11 -22 -2 -13 6
-32 16 -42 12 -12 15 -21 8 -24 -16 -5 -3 -32 17 -32 14 0 14 -2 1 -10 -11 -7
-11 -10 -2 -10 7 0 10 -4 7 -10 -3 -5 -1 -10 6 -10 6 0 9 -8 6 -20 -3 -11 -1
-20 5 -20 6 0 8 -7 4 -15 -3 -8 4 -24 16 -34 11 -11 18 -27 15 -35 -3 -8 1
-17 10 -20 8 -4 13 -13 9 -21 -3 -8 -1 -15 5 -15 6 0 9 -6 6 -14 -3 -7 4 -21
15 -30 11 -10 17 -24 14 -32 -3 -8 -1 -14 5 -14 6 0 9 -7 5 -15 -3 -8 2 -19
12 -24 9 -6 13 -11 9 -11 -5 0 -1 -7 7 -16 9 -8 21 -12 27 -8 8 4 7 9 -2 15
-11 7 -11 9 1 9 13 0 13 1 0 10 -12 8 -12 10 5 11 13 0 15 3 6 6 -10 4 -6 12
14 29 36 31 63 31 75 -1 6 -15 17 -25 30 -25 14 0 20 -7 20 -21 0 -11 4 -18 9
-14 5 3 11 -5 13 -17 2 -13 7 -22 11 -20 11 4 37 -30 31 -40 -3 -5 0 -8 6 -8
7 0 10 -7 6 -15 -3 -9 3 -19 16 -26 17 -9 18 -13 7 -20 -13 -8 -10 -11 8 -8
10 1 25 -30 18 -41 -3 -6 -1 -10 5 -10 7 0 10 -7 6 -15 -3 -8 3 -19 12 -25 11
-6 13 -12 7 -17 -15 -11 -12 -39 4 -35 9 2 12 -4 8 -18 -3 -11 0 -20 6 -21 7
0 6 -3 -2 -6 -11 -5 -11 -7 0 -14 12 -8 12 -10 0 -18 -11 -7 -10 -11 5 -20 17
-9 17 -12 4 -22 -11 -8 -12 -12 -2 -16 16 -6 18 -328 1 -339 -8 -4 -8 -9 0
-17 13 -13 15 -357 2 -357 -11 0 -9 -32 3 -46 6 -6 31 -8 59 -6 35 3 52 0 58
-9 5 -8 9 -9 9 -4 0 12 70 8 70 -4 0 -3 21 -6 47 -6 30 -1 48 -5 51 -14 4 -11
6 -11 14 0 7 10 11 11 14 2 3 -7 12 -9 21 -6 8 3 19 0 24 -8 6 -10 9 -10 9 -1
0 6 4 12 10 12 5 0 9 -3 9 -7 -3 -20 2 -26 11 -13 9 13 11 13 20 0 9 -13 10
-13 10 0 0 9 3 11 8 5 4 -5 29 -11 56 -13 28 -1 52 -6 55 -10 4 -4 30 -7 59
-7 35 -1 56 -6 62 -15 7 -10 10 -11 10 -2 0 6 7 12 15 12 8 0 15 -4 15 -8 0
-4 17 -9 38 -10 20 -2 38 -6 40 -11 1 -4 16 -5 32 -3 21 3 30 0 30 -9 0 -11 2
-11 10 1 6 9 10 11 10 3 0 -7 7 -10 15 -7 8 4 15 2 15 -2 0 -5 19 -9 42 -10
23 0 43 -4 45 -10 2 -5 22 -8 45 -6 31 3 43 0 51 -13 8 -14 11 -15 18 -4 7 11
9 11 9 1 0 -7 5 -10 10 -7 6 4 19 4 28 0 9 -4 32 -7 50 -6 17 2 32 -2 32 -7 0
-4 14 -7 30 -4 17 2 30 0 30 -5 0 -6 11 -8 25 -5 14 2 25 0 25 -6 0 -12 33
-10 42 3 5 7 8 7 8 0 0 -6 17 -9 40 -7 29 3 40 0 40 -9 0 -11 3 -11 11 1 6 9
12 11 15 5 2 -6 20 -9 39 -7 19 2 35 0 35 -5 0 -5 7 -10 15 -10 8 0 15 4 15 9
0 13 48 9 54 -4 5 -10 7 -10 12 1 5 11 8 11 15 0 7 -12 9 -11 9 1 0 13 1 13
10 0 8 -12 11 -13 19 -1 6 9 23 12 55 10 27 -3 46 0 46 6 0 5 5 3 10 -5 7 -11
10 -12 10 -2 0 10 16 13 65 10 39 -2 65 1 66 7 0 6 3 4 6 -2 3 -10 9 -9 20 3
13 13 18 13 25 2 8 -10 11 -10 15 0 5 13 83 17 83 5 -1 -12 -30 -48 -30 -37 0
5 -11 -4 -25 -21 -13 -16 -24 -24 -25 -17 0 7 -4 11 -10 7 -5 -3 -7 -12 -4
-19 6 -14 -22 -30 -37 -20 -5 3 -9 -2 -9 -11 0 -11 -5 -15 -15 -11 -9 3 -15 0
-15 -10 0 -8 -4 -12 -10 -9 -5 3 -10 1 -10 -4 0 -6 -3 -10 -7 -8 -5 1 -9 -3
-10 -8 -1 -6 7 -9 18 -7 11 2 22 -4 25 -13 5 -13 8 -14 15 -3 7 11 10 11 21 0
11 -11 8 -18 -15 -38 -16 -13 -32 -22 -37 -19 -4 3 -11 -2 -14 -11 -4 -9 -13
-14 -21 -10 -9 3 -15 -1 -15 -10 0 -10 -6 -14 -15 -10 -9 3 -15 0 -15 -10 0
-10 -6 -14 -15 -10 -9 3 -21 -4 -31 -19 -9 -14 -21 -25 -28 -24 -7 0 -6 2 2 6
6 2 12 9 12 15 0 6 -6 6 -15 -2 -8 -7 -15 -19 -15 -27 0 -8 -4 -11 -10 -8 -5
3 -10 1 -10 -4 0 -6 -9 -11 -20 -11 -11 0 -20 -7 -20 -16 0 -8 -4 -12 -10 -9
-5 3 -10 1 -10 -4 0 -6 -7 -11 -15 -11 -8 0 -15 -7 -15 -16 0 -10 -6 -14 -15
-10 -9 3 -15 0 -15 -10 0 -9 -6 -14 -12 -11 -7 2 -20 -4 -28 -13 -8 -10 -24
-20 -35 -22 -11 -2 -19 -10 -17 -17 1 -7 -2 -10 -8 -6 -5 3 -10 1 -10 -4 0 -6
-6 -11 -14 -11 -8 0 -17 -7 -20 -16 -4 -9 -9 -14 -13 -11 -9 9 -64 -33 -58
-44 6 -8 -8 -13 -27 -10 -5 0 -8 -6 -8 -14 0 -8 -11 -17 -25 -21 -14 -3 -25
-13 -25 -23 0 -14 -2 -14 -10 -1 -7 12 -11 10 -19 -10 -5 -14 -10 -21 -10 -16
-1 5 -12 -4 -26 -20 -14 -16 -25 -25 -25 -20 0 5 -11 -4 -25 -20 -14 -16 -25
-25 -25 -20 0 5 -11 -1 -25 -14 -13 -12 -23 -25 -22 -29 1 -3 -1 -6 -5 -6 -3
0 -20 -16 -37 -35 -16 -19 -38 -35 -48 -35 -10 0 -20 -11 -24 -25 -4 -14 -7
-21 -8 -16 -1 5 -10 -1 -21 -14 -11 -13 -20 -20 -20 -16 0 4 -5 4 -11 0 -8 -4
-7 -9 2 -15 13 -8 7 -11 -17 -8 -4 0 -12 -10 -18 -23 -6 -13 -19 -23 -28 -23
-21 0 -67 -43 -79 -72 -5 -14 -17 -23 -30 -23 -12 0 -23 -8 -26 -20 -3 -11
-12 -20 -19 -20 -8 0 -13 -6 -11 -12 1 -7 -5 -13 -13 -13 -8 0 -20 -9 -27 -20
-6 -11 -17 -20 -24 -20 -6 0 -17 -9 -23 -20 -11 -21 -34 -39 -51 -41 -5 -1
-14 -2 -20 -3 -5 -1 -3 -5 4 -10 12 -8 9 -11 -12 -16 -15 -4 -24 -11 -21 -16
3 -5 -4 -9 -15 -9 -12 0 -26 -9 -33 -20 -7 -11 -18 -20 -24 -20 -7 0 -15 -7
-18 -16 -3 -8 -10 -13 -15 -10 -5 3 -12 -1 -15 -10 -3 -8 -10 -13 -15 -10 -5
3 -12 -1 -15 -10 -3 -8 -10 -13 -15 -10 -5 3 -12 -1 -15 -10 -4 -9 -13 -14
-21 -10 -8 3 -15 1 -15 -4 0 -6 -6 -9 -12 -7 -7 1 -12 -3 -11 -10 3 -12 -75
-47 -93 -42 -21 6 -54 -13 -54 -32 0 -11 5 -17 10 -14 6 3 10 0 10 -8 0 -10 7
-13 19 -10 10 2 25 -2 32 -10 7 -8 21 -12 31 -9 12 3 18 -1 18 -12 0 -10 5
-14 10 -11 6 4 19 3 28 -1 9 -4 27 -6 40 -5 13 2 22 -3 22 -11 0 -10 3 -9 10
2 5 8 10 10 10 4 0 -6 13 -9 30 -6 21 3 30 0 30 -9 0 -12 2 -12 9 -1 6 11 11
10 25 -3 9 -9 16 -12 16 -6 0 6 14 11 30 11 17 0 30 -3 30 -7 0 -5 43 -7 95
-5 63 2 95 0 95 -7 0 -6 -4 -11 -9 -11 -12 0 -26 -39 -22 -61 1 -9 -6 -20 -16
-23 -15 -6 -15 -8 -3 -16 8 -6 10 -10 5 -10 -7 0 -9 -15 -7 -36 3 -24 0 -39
-9 -45 -12 -7 -12 -9 0 -9 8 0 11 -7 8 -20 -3 -11 0 -20 6 -20 6 0 2 -7 -9
-15 -18 -14 -18 -16 9 -19 7 -1 12 -15 12 -34 0 -17 3 -32 8 -32 4 0 5 -5 2
-11 -4 -6 -22 -8 -41 -6 -19 3 -37 1 -40 -4 -3 -5 1 -9 8 -9 7 -1 1 -8 -15
-16 -15 -8 -32 -12 -37 -9 -6 3 -10 -1 -10 -10 0 -9 -4 -13 -10 -10 -5 3 -10
2 -10 -3 0 -5 -10 -12 -22 -16 -17 -4 -20 -8 -10 -14 10 -7 7 -13 -12 -25 -15
-10 -23 -23 -20 -31 3 -9 -4 -19 -17 -26 -17 -10 -19 -14 -8 -22 11 -7 11 -11
1 -15 -6 -2 -10 -9 -6 -14 3 -5 0 -9 -5 -9 -6 0 -11 5 -11 11 0 5 -4 7 -10 4
-5 -3 -10 0 -10 8 0 8 -10 19 -22 25 -13 6 -17 11 -10 11 7 1 11 5 7 11 -3 5
-12 7 -21 3 -9 -3 -14 0 -12 8 2 7 -6 13 -17 14 -11 0 -19 6 -18 13 2 6 -3 12
-10 12 -6 0 -23 14 -36 30 -13 16 -27 27 -32 24 -5 -3 -9 2 -9 10 0 9 -7 16
-15 16 -9 0 -20 11 -25 24 -9 25 -30 44 -30 27 0 -5 6 -12 13 -14 7 -3 7 -6 1
-6 -11 -1 -40 27 -46 44 -2 5 -6 9 -10 8 -5 -2 -8 2 -8 7 0 6 -7 10 -14 10 -8
0 -21 12 -29 27 -7 16 -19 27 -25 26 -7 -2 -12 4 -12 13 0 8 -5 12 -10 9 -6
-3 -14 4 -19 17 -4 13 -16 23 -25 23 -8 0 -15 3 -13 6 4 12 -25 39 -36 32 -5
-3 -7 -1 -3 5 3 6 2 13 -4 17 -5 3 -10 0 -10 -7 -1 -7 -6 -3 -13 10 -7 12 -16
19 -20 16 -4 -4 -7 0 -7 10 0 9 -4 14 -10 11 -5 -3 -10 2 -10 11 0 10 -3 14
-7 11 -3 -4 -11 3 -17 14 -6 12 -14 20 -17 18 -10 -6 -49 32 -44 41 3 4 -4 10
-15 13 -11 3 -19 11 -18 19 2 9 -6 12 -24 10 -15 -2 -33 0 -40 4 -7 4 -31 7
-55 5 -24 -1 -43 1 -43 6 0 4 -18 8 -41 9 -24 0 -44 6 -50 15 -8 12 -10 12
-19 -1 -5 -8 -10 -10 -10 -3 0 6 -8 9 -19 6 -10 -2 -24 2 -32 9 -7 8 -25 12
-39 10 -17 -2 -34 3 -45 15 -12 11 -20 14 -22 6 -3 -8 -12 -8 -33 0 -17 6 -30
14 -30 18 0 4 -9 5 -20 2 -12 -3 -20 0 -20 6 0 7 -4 9 -10 6 -5 -3 -10 0 -10
7 0 9 -3 9 -10 -2 -7 -11 -10 -11 -10 -2 0 7 -5 10 -12 6 -6 -4 -18 2 -26 12
-11 15 -15 16 -19 5 -4 -10 -10 -8 -24 10 -16 20 -20 22 -29 9 -7 -11 -10 -11
-10 -2 0 7 -4 11 -9 8 -5 -3 -12 2 -15 11 -6 15 -8 15 -16 3 -7 -10 -10 -11
-10 -2 0 6 -11 12 -25 12 -14 0 -25 5 -25 11 0 5 -4 7 -10 4 -5 -3 -10 -1 -10
5 0 6 -4 8 -10 5 -5 -3 -10 -2 -10 4 0 6 -6 8 -14 5 -7 -3 -16 1 -19 9 -3 9
-14 13 -31 10 -17 -4 -28 0 -32 10 -3 9 -12 13 -20 10 -7 -3 -17 2 -20 11 -3
9 -10 13 -15 10 -5 -3 -12 1 -15 10 -3 8 -11 13 -19 10 -7 -3 -20 2 -29 11 -9
9 -16 13 -16 8 0 -4 -5 0 -11 9 -5 9 -16 15 -23 12 -7 -3 -21 2 -30 11 -9 9
-16 13 -16 9 0 -4 -12 5 -26 19 -14 14 -32 23 -40 20 -7 -3 -16 2 -20 10 -3 9
-12 13 -20 10 -8 -3 -14 1 -14 11 0 9 -8 16 -20 16 -11 0 -20 6 -20 14 0 21
-21 31 -31 15 -7 -11 -10 -9 -15 8 -3 12 -12 19 -18 17 -7 -3 -21 6 -31 20
-10 13 -23 22 -30 20 -6 -3 -21 9 -33 26 -13 17 -27 28 -33 25 -5 -4 -9 -1 -9
4 0 6 -5 11 -11 11 -6 0 -22 14 -36 31 -14 17 -29 26 -32 21 -4 -6 -11 -4 -19
4 -7 8 -9 14 -5 15 4 1 -3 4 -17 8 -14 4 -27 17 -31 31 -3 14 -12 24 -19 22
-16 -4 -60 37 -60 55 0 7 -4 13 -8 13 -5 0 -18 9 -30 20 -12 12 -22 17 -23 13
-1 -4 -4 3 -8 17 -4 15 -15 26 -29 28 -12 2 -20 7 -17 12 3 4 -15 25 -40 47
-25 21 -45 44 -45 51 0 7 -4 10 -10 7 -5 -3 -10 0 -10 7 0 7 -11 22 -25 32
-13 10 -22 22 -20 27 3 4 -3 14 -13 21 -11 7 -20 18 -22 23 -1 6 -6 9 -11 8
-5 -2 -9 4 -9 12 0 8 -7 15 -15 15 -14 0 -33 25 -33 44 -1 5 -11 14 -24 21
-13 6 -22 17 -21 23 2 7 -3 12 -11 12 -8 0 -24 14 -36 30 -12 17 -26 28 -31
25 -5 -4 -20 5 -33 18 -14 14 -27 22 -30 20 -3 -3 -8 1 -12 10 -3 9 -12 13
-20 10 -8 -3 -14 1 -14 9 0 8 -12 15 -27 16 -16 1 -29 6 -31 12 -2 5 -10 6
-18 3 -9 -3 -14 1 -14 13 0 15 -2 16 -9 5 -8 -12 -12 -12 -25 2 -9 9 -23 14
-31 11 -9 -4 -15 0 -15 7 0 11 -3 11 -10 -1 -5 -8 -10 -10 -10 -4 0 7 -11 9
-25 6 -19 -3 -25 0 -26 14 0 11 -3 14 -6 7 -5 -14 -53 -18 -53 -5 0 4 -17 7
-37 8 -20 0 -39 6 -41 13 -4 11 -6 10 -13 0 -5 -9 -9 -10 -9 -2 0 6 -9 9 -21
6 -15 -4 -27 0 -36 13 -12 16 -15 17 -23 4 -6 -9 -10 -11 -10 -3 0 7 -7 10
-15 7 -9 -4 -15 0 -15 7 0 12 -2 12 -9 1 -7 -11 -10 -11 -22 0 -8 7 -27 14
-43 15 -16 1 -33 8 -38 15 -6 10 -8 10 -8 -2 0 -11 -3 -10 -11 4 -9 15 -13 16
-20 5 -6 -10 -9 -10 -9 -2 0 7 -7 10 -15 7 -8 -4 -15 -2 -15 2 0 5 -16 10 -36
11 -24 1 -41 9 -51 23 -12 18 -17 19 -31 8 -11 -9 -16 -10 -19 -2 -2 7 -12 10
-22 7 -10 -2 -25 3 -35 12 -9 9 -16 13 -16 9 0 -3 -7 -1 -15 6 -9 7 -15 8 -15
2 0 -5 -9 -8 -20 -5 -11 3 -20 9 -20 13 0 5 -9 6 -20 3 -12 -3 -22 1 -25 9 -4
10 -15 13 -30 10 -16 -3 -27 1 -30 10 -4 10 -15 13 -30 10 -15 -2 -27 1 -30 9
-4 10 -20 13 -56 10 -39 -2 -53 1 -63 15 -9 12 -15 14 -20 6 -10 -16 -53 -15
-59 1 -4 9 -8 8 -16 -3 -10 -13 -12 -13 -21 0 -6 10 -10 11 -10 3 0 -7 -7 -13
-15 -13 -8 0 -15 5 -15 10 0 12 -22 9 -32 -5 -5 -6 -12 -4 -18 5 -9 13 -10 13
-10 0 0 -13 -1 -13 -10 0 -9 13 -10 13 -10 0 0 -13 -1 -13 -11 0 -8 11 -12 12
-16 3 -5 -14 -33 -18 -33 -5 0 4 -54 6 -120 4 -94 -2 -120 0 -120 10 0 10 -3
9 -11 -2 -7 -10 -12 -11 -15 -4 -3 7 -14 9 -26 7 -11 -4 -24 0 -30 8 -7 11
-11 11 -15 2 -6 -17 -53 -17 -53 0 0 8 -4 7 -10 -3 -6 -9 -10 -11 -10 -3 0 7
-6 10 -14 7 -8 -3 -17 -1 -20 4 -3 6 -15 8 -26 5 -11 -3 -20 0 -20 6 0 5 -7 8
-15 5 -8 -4 -17 1 -21 10 -3 9 -17 16 -31 16 -13 0 -21 4 -18 10 3 6 0 10 -8
10 -16 0 -52 48 -43 57 3 3 -2 12 -12 19 -14 11 -14 15 -4 22 11 7 10 12 -3
26 -9 9 -12 16 -6 16 6 0 8 7 5 15 -4 8 -1 22 6 30 10 12 10 15 0 15 -9 0 -7
7 5 20 14 15 15 20 4 20 -11 0 -11 2 1 10 8 5 11 10 6 10 -6 0 -1 7 10 15 10
8 15 15 11 15 -12 0 20 30 32 30 6 0 11 5 11 11 0 5 4 8 9 4 5 -3 17 2 26 11
9 9 30 17 46 18 16 1 29 6 29 11 0 6 5 3 10 -5 9 -13 10 -13 10 0 0 12 2 12 9
2 11 -17 21 -17 32 0 7 10 9 10 9 1 0 -15 21 -13 33 2 5 7 10 7 15 0 4 -5 30
-10 57 -10 28 0 53 5 57 10 5 6 8 6 8 -1 0 -6 7 -11 15 -11 8 0 15 5 15 11 0
6 5 4 10 -4 9 -13 10 -13 10 0 0 9 3 11 8 5 4 -5 16 -10 27 -10 11 0 23 5 28
10 4 6 11 4 17 -5 9 -13 10 -13 10 0 0 9 3 11 8 5 4 -5 23 -10 42 -10 19 0 38
5 42 10 5 6 8 4 8 -5 1 -9 6 -5 15 10 7 14 19 25 27 25 7 1 12 7 10 14 -1 7 1
10 6 7 5 -3 19 8 31 24 12 17 17 30 12 30 -6 0 -8 7 -5 15 3 8 11 13 17 12 7
-1 11 6 9 16 -2 10 3 16 10 15 8 -2 12 4 10 15 -2 10 3 16 10 15 8 -2 12 4 10
15 -2 9 1 17 7 17 5 0 7 9 4 20 -4 15 0 20 13 20 13 0 15 3 7 8 -9 6 -8 16 7
40 11 18 25 32 30 32 6 0 8 5 5 10 -3 6 -1 10 4 10 6 0 11 7 11 16 0 8 5 12
10 9 6 -3 10 0 10 9 0 19 49 78 60 71 4 -3 10 4 13 15 3 11 13 20 22 20 9 0
24 9 33 20 10 10 24 20 32 22 8 2 21 9 28 16 8 7 18 10 23 7 5 -4 9 0 9 7 0 9
3 9 10 -2 8 -13 10 -12 10 4 0 12 5 16 15 12 8 -3 15 0 15 7 0 8 3 8 9 -2 5
-7 14 -10 20 -7 6 4 8 12 5 18 -5 7 2 9 18 6 13 -2 30 2 37 10 8 8 25 12 42
10 16 -3 31 0 33 6 3 7 9 5 15 -4 7 -10 11 -11 11 -2 0 6 11 12 25 12 14 0 25
-6 26 -12 0 -10 2 -10 6 0 2 6 13 12 23 12 10 0 21 -6 24 -12 5 -10 7 -10 12
1 5 11 8 11 15 0 8 -12 11 -11 19 1 5 8 10 11 10 5 0 -5 21 -11 47 -11 26 -1
49 -6 51 -12 2 -6 9 -9 16 -6 8 3 16 -3 20 -13 6 -15 8 -15 17 -3 8 13 10 13
19 0 5 -8 10 -10 10 -5 0 6 6 3 13 -5 7 -8 21 -17 32 -18 11 -2 21 -8 23 -12
2 -5 10 -6 18 -3 8 3 14 -1 14 -9 0 -7 11 -15 26 -16 32 -2 46 -11 39 -22 -3
-5 -1 -11 5 -15 5 -3 10 -1 10 6 0 7 8 3 18 -8 9 -11 23 -18 29 -16 7 3 16 -2
19 -11 3 -9 10 -13 15 -10 5 3 12 -2 15 -10 3 -9 12 -16 19 -16 8 0 23 -14 35
-30 12 -17 26 -28 31 -24 5 3 12 -2 15 -10 3 -9 12 -16 19 -16 12 0 52 -38 48
-46 -1 -2 9 -16 22 -30 14 -15 25 -21 25 -15 0 19 20 2 31 -27 8 -20 12 -23
19 -13 6 11 9 8 12 -10 2 -13 9 -23 16 -21 6 1 12 -2 12 -8 0 -5 6 -10 13 -10
7 0 28 -16 47 -35 19 -19 30 -35 24 -35 -5 0 7 -8 26 -18 19 -9 35 -24 35 -32
0 -8 6 -15 13 -15 7 0 16 -6 21 -13 5 -8 12 -14 17 -15 5 -1 8 -5 7 -9 -1 -3
4 -12 12 -18 12 -10 15 -10 15 1 1 10 6 8 18 -6 10 -11 24 -21 32 -23 8 -2 22
-11 30 -21 9 -10 20 -16 27 -14 6 2 18 -3 27 -12 9 -9 16 -13 16 -8 0 4 5 0
11 -11 9 -15 13 -16 20 -5 7 11 9 11 9 1 0 -7 5 -10 10 -7 6 3 10 2 10 -3 0
-6 9 -8 20 -5 11 3 20 1 20 -5 0 -6 8 -8 19 -5 10 2 25 -2 32 -9 7 -8 23 -12
36 -10 13 2 31 -2 40 -9 12 -11 17 -11 20 -2 5 13 34 6 45 -11 5 -7 8 -5 8 4
0 13 1 13 11 0 9 -12 12 -13 16 -1 5 11 7 11 14 0 8 -12 11 -11 20 1 6 8 12
11 15 5 6 -14 157 -10 162 4 2 6 -2 11 -8 11 -8 0 -11 14 -8 40 2 23 -1 40 -7
40 -5 0 -3 5 5 10 13 9 13 10 0 10 -13 0 -13 1 0 10 13 9 13 11 0 20 -13 9
-13 10 0 10 12 0 13 2 1 9 -8 5 -12 19 -9 35 3 14 2 26 -2 26 -4 0 -10 9 -13
20 -3 11 0 20 6 20 7 0 5 5 -3 10 -13 9 -13 11 0 20 12 7 12 10 1 10 -9 0 -12
10 -9 35 2 19 0 35 -5 35 -5 0 -7 14 -5 31 3 21 0 33 -9 36 -12 5 -12 7 -1 14
9 7 10 11 2 17 -7 4 -11 18 -10 32 1 14 -2 31 -7 37 -5 7 -7 20 -3 28 3 8 1
15 -5 15 -6 0 -7 5 -4 10 3 6 1 10 -6 10 -7 0 -10 11 -7 30 3 17 0 30 -5 30
-5 0 -7 7 -3 15 3 8 0 15 -5 15 -6 0 -9 9 -6 20 3 10 0 21 -6 23 -6 2 -11 20
-11 40 -1 20 -5 37 -11 37 -5 0 -4 4 3 8 14 9 6 42 -10 42 -6 0 -8 7 -4 15 3
8 1 15 -5 15 -6 0 -9 7 -5 15 3 8 1 15 -5 15 -7 0 -9 12 -7 30 3 22 0 30 -10
30 -10 0 -13 8 -10 25 3 14 1 25 -5 25 -5 0 -7 9 -4 20 3 11 1 20 -5 20 -6 0
-8 7 -4 15 3 8 0 15 -7 15 -8 0 -7 4 3 10 12 8 12 10 -3 15 -18 7 -42 79 -32
95 3 6 0 10 -7 10 -9 0 -9 3 2 10 12 8 12 10 -5 10 -15 0 -17 2 -6 9 11 7 10
11 -5 20 -14 8 -15 11 -4 11 12 1 11 4 -4 15 -10 7 -15 18 -11 24 3 6 2 11 -3
11 -5 0 -12 9 -15 20 -3 11 -1 20 5 20 5 0 6 5 3 10 -4 6 -11 8 -16 5 -5 -4
-9 -1 -9 4 0 6 6 11 13 12 9 0 9 2 -1 6 -6 2 -10 9 -6 14 3 5 0 9 -6 9 -6 0
-9 4 -6 9 4 5 1 11 -4 13 -6 2 -12 17 -13 33 -1 17 -8 36 -15 44 -7 7 -11 20
-8 27 3 8 1 14 -5 14 -6 0 -9 7 -5 15 3 8 -2 22 -11 30 -8 9 -13 19 -10 22 3
3 -1 12 -9 20 -8 9 -13 22 -10 29 3 8 1 14 -5 14 -6 0 -9 7 -5 15 3 8 1 15 -5
15 -6 0 -8 4 -5 9 3 5 -1 12 -10 15 -11 4 -15 14 -11 31 2 14 0 28 -5 31 -4 3
-6 9 -3 14 3 5 -5 16 -17 24 -14 10 -17 16 -8 16 9 0 8 5 -6 15 -16 12 -17 16
-4 24 12 9 12 11 -3 17 -9 3 -14 10 -11 15 3 5 0 9 -6 9 -7 0 -10 7 -6 15 3 8
-1 20 -8 28 -21 21 -48 77 -36 77 16 0 12 14 -12 40 -12 13 -23 36 -24 50 -2
33 -21 70 -35 70 -6 0 -9 6 -6 14 3 8 -1 17 -10 20 -8 4 -13 13 -10 20 3 8 1
16 -5 18 -7 3 -13 19 -14 37 -1 19 -12 42 -25 54 -15 14 -18 22 -10 25 11 4
10 6 0 13 -12 7 -11 9 1 9 13 0 13 1 0 10 -8 5 -10 10 -3 10 6 0 9 9 5 22 -3
14 -2 19 6 14 8 -4 16 3 22 18 9 25 13 26 90 26 57 0 80 -4 81 -12z">
      <animate id="pl-duck" attributeName="stroke-dashoffset" begin="0s" values="51127; 0" dur="2s" repeatCount="1"
        fill="freeze" calcMode="linear">
      </animate>
    </path>
  </g>
</svg>
  `;
};