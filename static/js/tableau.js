(function ufcViz() {

    let ufcWeight = document.getElementById("fighterWeight");
    let ufcURL = "https://public.tableau.com/views/Project-3_16186819550490/WeightClass?:language=en&:display_count=y&:origin=viz_share_link";

    let ufcCountry = document.getElementById("fightCountry");
    let ufcCountryURL = "https://public.tableau.com/views/Project-3_16186819550490/CountryPie?:language=en&:display_count=y&:origin=viz_share_link";

    let ufcCountryRank = document.getElementById("fightCountryRank");
    let ufcCountryRankURL = "https://public.tableau.com/views/Project-3_16186819550490/CountrytopRanks?:language=en&:display_count=y&:origin=viz_share_link";

    let ufcROdds = document.getElementById("fightROdds");
    let ufcROddsURL = "https://public.tableau.com/views/Project-3_16186819550490/Dashboard2?:language=en&:display_count=y&:origin=viz_share_link";

    let ufcAgeDif = document.getElementById("fightAgeDif");
    let ufcAgeDifURL = "https://public.tableau.com/views/Project-3_16186819550490/Dashboard5?:language=en&:display_count=y&:origin=viz_share_link";

    
    
    
    // let ufcBOdds = document.getElementById("fightBOdds");
    // let ufcBOddsURL = "https://public.tableau.com/views/Project-3_16186819550490/BOdds?:language=en&:display_count=y&:origin=viz_share_link";    
    

    // let ufcHeightDif = document.getElementById("fightHeightDif");
    // let ufcHeightDifURL = "https://public.tableau.com/views/UFCPredictiveModel/HeightDifference?:language=en&:display_count=y&:origin=viz_share_link";

    // let ufcReachDif = document.getElementById("fightReachDif");
    // let ufcReachDifURL = "https://public.tableau.com/views/UFCPredictiveModel/ReachDifference?:language=en&:display_count=y&:origin=viz_share_link";

    // let ufcStrikeDif = document.getElementById("fightStrikeDif");
    // let ufcStrikeDifURL = "https://public.tableau.com/views/UFCPredictiveModel/Sig_StrikeDifference?:language=en&:display_count=y&:origin=viz_share_link";

    // let ufcSubmissionDif = document.getElementById("fightSubmissionDif");
    // let ufcSubmissionDifURL = "https://public.tableau.com/views/Project-3_16186819550490/Dashboard2?:language=en&:display_count=y&:origin=viz_share_link";

    // let ufcTakedownDif = document.getElementById("fightTakedownDif");
    // let ufcTakedownDifURL = "https://public.tableau.com/views/Project-3_16186819550490/Dashboard5?:language=en&:display_count=y&:origin=viz_share_link";





    new tableau.Viz(ufcWeight, ufcURL);
    new tableau.Viz(ufcCountry, ufcCountryURL);
    new tableau.Viz(ufcCountryRank, ufcCountryRankURL);
    new tableau.Viz(ufcROdds, ufcROddsURL);
    // new tableau.Viz(ufcBOdds, ufcBOddsURL);
    new tableau.Viz(ufcAgeDif, ufcAgeDifURL);
    // new tableau.Viz(ufcHeightDif, ufcHeightDifURL);
    // new tableau.Viz(ufcReachDif, ufcReachDifURL);
    // new tableau.Viz(ufcStrikeDif, ufcStrikeDifURL);
    // new tableau.Viz(ufcSubmissionDif, ufcSubmissionDifURL);
    // new tableau.Viz(ufcTakedownDif, ufcTakedownDifURL);
    









})()