function reverseWordsInString(str)
{
    var wordsReversed = [];
    str.split(' ').forEach(function(word)
    {
        wordsReversed.push(word.split('').reverse().join(''));
    });
    return wordsReversed.join(' ');
}

module.exports = reverseWordsInString;
