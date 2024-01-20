function getFlagIndex(countryname) {
    switch (countryname) {
    case "American": return 0;
    case "Mexican": return 1;
    case "Italian": return 2;
    default: return 0;
    }
    return 0;
}