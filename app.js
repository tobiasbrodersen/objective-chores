var Frequency;
(function (Frequency) {
    Frequency[Frequency["Daily"] = 0] = "Daily";
    Frequency[Frequency["Weekly"] = 1] = "Weekly";
    Frequency[Frequency["Monthly"] = 2] = "Monthly";
    Frequency[Frequency["Yearly"] = 3] = "Yearly";
})(Frequency || (Frequency = {}));
var chore = {
    time: 30,
    frequency: "dudu",
    weight: 10,
};
console.log(chore);
