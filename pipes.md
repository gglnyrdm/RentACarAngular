# Angular Built-In Pipes

## Pipe
Bir verinin görüntülenme şeklini değiştirme için kullanılan Angular'a özel yapılardır. Verinin orjinalliğini bozmaksızın sadece template kısmında bir manipülasyon gerçekleştirmeyi pipelar sayesinde gerçekleştirebiliriz.

Angular'da kullanılan yaygın olarak kullanılan built-in pipe'lar şunlardır:
#### UpperCasePipe
#### LowerCasePipe
#### TitleCasePipe
#### CurrencyPipe
#### PercentPipe
#### JsonPipe
#### SlicePipe
#### KeyValuePipe
#### DatePipe
#### NumberPipe
#### AsyncPipe



### UpperCasePipe
String değerlerin tüm karakterlerini büyük harfe dönüştürür.
```
nameLowerCase:string = "dogukan koc"

<!-- Upper Case Pipe -->
<h5>Upper Case Pipe</h5>
<p>{{nameLowerCase | uppercase}}</p>
<p>{{'karakterlerin hepsi büyüyecek' | uppercase}} </p>
```

### LowerCasePipe
String değerlerin tüm karakterlerini küçük harfe dönüştürür.
```
nameUpperCase:string = "DOGUKAN KOC"

<!-- Lowe Case Pipe -->
<h5>Lower Case Pipe</h5>
<p>{{nameUpperCase | lowercase}}</p>
<p>{{'KARAKTERLERİN HEPSİ KÜÇÜLECEK' | lowercase}} </p>
```

### TitleCasePipe
String değer içerisindeki her kelimenin ilk harfini büyük harfe dönüştürür.
```
stringTiteCase:string = "her kelimenin ilk harfi normalde küçük yazılmıştı"

<!-- Title Case Pipe -->
<h5>Title Case Pipe</h5>
<p>{{stringTiteCase | titlecase}}</p>
<p>{{'her kelimenin ilk harfi normalde küçük yazılmıştı' | titlecase}}</p>

```

### CurrencyPipe
Sayısal değerleri parasal formata dönüştürür. Default para birimi $'dır.
```
price:number = 1250;

<!-- Currency Pipe -->
<h5>Currency Pipe</h5>
<p>{{price| currency}}</p>
<p>{{price| currency : 'USD'}}</p>
<p>{{price| currency: '₺'}}</p>
<p>{{price| currency:'TL'}}</p>
<p>{{1250 | currency}}</p>
```

### PercentPipe
Sayısal değerleri yüzdelik olarak formatlandırır.

```
discount:number = .25;
<!-- Percent Pipe -->
<h5>Currency Pipe</h5>
<p>{{discount | percent}}</p>
<p>{{.25 | percent}}</p>

```

### JsonPipe
Bir nesneyi JSON formatına dönüştürür.
```
  jsonObject : object = {
    firstName:'Dogukan',
    lastName:'Koc',
    mail:'dogukan.koc@mail.com',
    age: 26
  }

<!-- Json Pipe -->
<h5>Json Pipe</h5>
<p>{{personelObject|json}}</p> <!--Çıktı : { "firstName": "Dogukan", "lastName": "Koc", "mail": "dogukan.koc@mail.com", "age": 26 }-->
```

### SlicePipe
Bir dizinin belirli bir alt dizisini almak için kullanılır.
```
stringSlice:string = 'Angular Framework'
arraySlice:Array<number> = [1,2,3,4,5,6]

<!-- Slice Pipe -->
<h5>Slice Pipe</h5>
<p>{{ 'Angular' | slice:0:3 }}</p>  <!-- Çıktı: Ang -->
<p>{{stringSlice | slice:8:17}}</p> <!-- Çıktı: Framework -->
<p>{{arraySlice | slice:2:6}}</p> <!-- Çıktı: 3,4,5,6-->
```

### KeyValuePipe
Angular'da keyvalue pipe'i, bir nesnenin anahtar-değer çiftlerini alır ve bunları bir dizi içinde sunar. Bu pipe, genellikle ngFor yapılarıyla birlikte kullanılarak nesnenin her bir öğesini tek tek işlemek için kullanılır.
```
<!-- Key Value Pipe -->
<h5>Key Value Pipe</h5>
<p *ngFor = 'let item of personelObject | keyvalue' >
    Key: {{item.key}}  Value: {{item.value}}
</p>
```
### DatePipe
Tarihsel verileri biçimlendirir.
```
birthDate:string = '06.06.1997';

<!-- Date Pipe -->
<h5>Date Pipe</h5>
<p>{{birthDate | date}}</p>
<p>{{birthDate | date: 'fullDate'}}</p>
<p>{{birthDate | date: 'medium'}}</p>
<p>{{birthDate | date: 'shortTime'}}</p>
<p>{{birthDate | date: 'mm:ss'}}</p>
```
### NumberPiper
Sayıyı belirtilen biçimde biçimlendirmek için kullanılır.
```
  price:number = 1250;

<!-- Number Pipe -->
<h5>Number Pipe</h5>
<p>{{price | number:'1.2-3'}}</p> <!-- Çıktı: 1,250.00->
```
### AsyncPipe
 Angular'da asenkron verileri işlemek için kullanılan bir pipe'tır. Genellikle Observable'lar veya Promise'ler gibi asenkron veri kaynaklarıyla kullanılır. Bu pipe, bir asenkron veriyi şablonunuzda doğrudan kullanmanıza ve otomatik olarak güncellemeleri işlemenize olanak tanır.
 ````
 name$ = new BehaviorSubject<string>('Lorem');

 <!-- Async Pipe -->
<h5>Async Pipe</h5>
<p>{{ name$ | async }}</p> <!--Çıktı : Lorem-->
<!-- Async kullanmazsan -->
<p>{{ name$}}</p> <!--Çıktı : [object Object]-->

 ````
