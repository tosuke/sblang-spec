# トークン

## Identifier(識別子) {#identifier}
```
Identifier = [a-zA-Z][a-zA-Z0-9]*[%#$]?
```
変数や手続き、関数の名前。大文字と小文字は区別されない。


## Label(ラベル) {#label}
```
Label = @[a-zA-Z0-9]+
```
ラベルの名前。大文字と小文字は区別されない。


## リテラル
### StringLiteral(文字列リテラル) {#string-literal}
```
StringLiteral = \"[^\"]*\"
```


### DecimalNumberLiteral(十進数値リテラル) {#decimal-number-literal}
```
DecimalNumberLiteral = (0|[1-9][0-9]*)(\.[0-9]+([eE]\-?[0-9]+)?)?
```


### BinaryIntegerLiteral(二進整数リテラル) {#binary-integer-literal}
```
BinaryIntegerLiteral = &[Bb][01]+
```


### HexIntegerLiteral(十六進整数リテラル) {#hex-integer-literal}
```
HexIntegerLiteral = &[Hh][0-9a-fA-F]+
``` 