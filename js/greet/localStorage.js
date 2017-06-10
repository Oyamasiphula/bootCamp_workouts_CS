var storeData = function(greetedPeopleInfoTrack){
  // console.log(JSON.stringify(greetedPeopleInfoTrack));
    if (window.localStorage) {
        localStorage.setItem("peopleGreeted", greetedPeopleInfoTrack);
        return localStorage.people;
    };
};
