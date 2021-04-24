(function ufcViz() {

    let ufcWeight = document.getElementById("fighterWeight");
    let ufcURL = "https://public.tableau.com/views/Project-3_16186819550490/WeightClass?:language=en&:display_count=y&:origin=viz_share_link";

    let ufcCountry = document.getElementById("fightCountry");
    let ufcCountryURL = "https://public.tableau.com/views/Project-3_16186819550490/Sheet1?:language=en&:display_count=y&:origin=viz_share_link";

    let ufcCountryRank = document.getElementById("fightCountryRank");
    let ufcCountryRankURL = "https://public.tableau.com/views/Project-3_16186819550490/CountrytopRanks?:language=en&:display_count=y&:origin=viz_share_link";



    new tableau.Viz(ufcWeight, ufcURL);
    new tableau.Viz(ufcCountry, ufcCountryURL);
    new tableau.Viz(ufcCountryRank, ufcCountryRankURL);












})()