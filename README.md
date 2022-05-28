# semi project_tour-web
- 협업툴 : github


## 오픈 API
- 한국관광공사 국내관광지정보 openAPI
- 한국관광공사 두루누비 openAPI
- 강원도 반려동물 동반광광 openAPI

## 라이브러리 활용
- react-collapsible (https://openbase.com/js/react-collapsible)
- 


## 폴더구조
```
index.js - GlobalStyles.js
         - Meta.js
         - store.js
         - App.js - Header.js
                  - Travel.js 
                  - PetTravel.js
                  - LoadTour.js
```
리덕스 모듈
```
TravelSlice.js                               Travel.js
PetTravelSlice.js  - store.js - index.js  -  PetTrevel.js
LoadTourSlice.js                             LoadTour.js
```