(function ufcViz() {

    let ufcWeight = document.getElementById("fighterWeight");
    let ufcURL = "https://public.tableau.com/views/Project-3_16186819550490/WeightClass?:language=en&:display_count=y&:origin=viz_share_link";

    let ufcCountry = document.getElementById("fightCountry");
    let ufcCountryURL = "https://public.tableau.com/views/Project-3_16186819550490/CountryPie?:language=en&:display_count=y&:origin=viz_share_link";

    let ufcCountryRank = document.getElementById("fightCountryRank");
    let ufcCountryRankURL = "https://public.tableau.com/views/Project-3_16186819550490/CountrytopRanks?:language=en&:display_count=y&:origin=viz_share_link";

    let ufcROdds = document.getElementById("fightROdds");
    let ufcROddsURL = "https://public.tableau.com/views/Project-3_16186819550490/ROdds?:language=en&:display_count=y&:origin=viz_share_link";

    let ufcBOdds = document.getElementById("fightBOdds");
    let ufcBOddsURL = "https://public.tableau.com/views/Project-3_16186819550490/BOdds?:language=en&:display_count=y&:origin=viz_share_link";



    new tableau.Viz(ufcWeight, ufcURL);
    new tableau.Viz(ufcCountry, ufcCountryURL);
    new tableau.Viz(ufcCountryRank, ufcCountryRankURL);
    new tableau.Viz(ufcROdds, ufcROddsURL);
    new tableau.Viz(ufcBOdds, ufcBOddsURL);












})()