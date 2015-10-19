function reverseWordOrderInString(str)
{
    var words = str.split(" ");
    return words.reverse().join(" ");
}

module.exports = reverseWordOrderInString;
