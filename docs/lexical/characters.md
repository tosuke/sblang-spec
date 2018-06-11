# 文字

## ソースコード
以下の文字コードで表されたもの。
- ASCII
- UTF-8

## 文字集合
```
Character = "\u0000"|...|"\uFFFF";
```

## 行末
```
EndOfLine = "\u000D"|"\u000A"|":";
```

## 英字
```
Letter = "a"|...|"z" | "A"|...|"Z";
```

## 数字
```
Digit = "0"|...|"9";
BinaryDigit = "0"|"1";
HexLetter = "a"|...|"f" | "A"|...|"F";
HexDigit = Digit | HexLetter;
```