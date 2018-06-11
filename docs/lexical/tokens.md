# 語句

## コメント
```
Comment = "'", { Character };
```

## 識別子
```
Identifier = Letter, { Letter | Digit }, [ IdentifierSuffix ];
IdentifierSuffix = "%"|"#"|"$";
```
変数や手続き、関数の名前。大文字と小文字は区別されない。

## ラベル
```
LabelChar = Letter | Digit;
Label = "@", LabelChar, { LabelChar };
```
ラベルの名前。大文字と小文字は区別されない。

## 文字列リテラル
```
StringLiteral = DoubleQuotedString | Label;
DoubleQuotedString = '"', { Character - '"' }, '"'; 
```

## 数値リテラル
```
NumericLiteral = DecimalNumericLiteral | BinaryIntegerLiteral | HexIntegerLiteral;

Digits = Digit, { Digit };
DecimalNumericLiteral = Digits, [".", Digits], ["e"|"E", ["-"], Digits];

BinaryIntegerLiteral = "&", "b"|"B", BinaryDigit, { BinaryDigit };
HexIntegerLiteral = "&", "h"|"H", HexLetter, { HexLetter };
```

## 演算子
```
Operator = "+" | "-" | "*" | "/" | "MOD" |"DIV"
| ">" | "<" | ">=" | "<=" | "==" | "!="
| "AND" | "OR" | "XOR" | "NOT" | "<<" | ">>"
| "&&" | "||" | "!";
```
大文字と小文字は区別されない。

## 予約語
```
Keywords = "IF" | "THEN" | "ELSE" | "ELSEIF"
| "GOTO" | "GOSUB" | "RETURN" | "ON"
| "FOR" | "NEXT" | "WHILE" | "WEND" | "REPEAT" | "UNTIL" | "BREAK" | "CONTINUE"
| "DEF" | "END" | "VAR" | "DIM"
| "DATA" | "READ" | "RESTORE"
| "OUT" | "COMMON"
| "PRINT" | "INPUT" | "LINPUT" | "SWAP" | "CALL" | "USE" | "EXEC" | "INC" | "DEC"
```
大文字と小文字は区別されない。