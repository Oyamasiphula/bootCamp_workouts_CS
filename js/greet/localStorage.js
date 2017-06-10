var storeData = function(greetedPeopleInfoTrack) {
    if (window.localStorage) {
        localStorage.setItem("peopleGreeted", greetedPeopleInfoTrack);
        return localStorage.people;
    };
};
