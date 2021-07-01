

letters = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
}

digits = "23"

result = []


def letterCombination(level, digits, res, s):
    if level == len(digits):
        res.append(s)
        return
    letter = letters[digits[level]]
    print(letter)
    for l in letter:
        letterCombination(level + 1, digits, res,  s + l)


# for i in digits:
#     print(i)
# print(digits[0])
# print(digits[1])
print(letterCombination(0, digits, result,  ""))

print(result)
