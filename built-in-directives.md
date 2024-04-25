![alt text](/angular.png)

# Angular directive nedir?

Angular'da bir directive, HTML etiketlerine özel davranışlar veya işlevsellikler eklemek için kullanılan bir yapıdır. Directive'ler, Angular uygulamalarında tekrar kullanılabilir bileşenler oluşturmanın temel bir yoludur.Angularda 3 tip directive vardır.

## Angular directiveler:

### Component directive:

 Angular bileşenleri, belirli bir işlevselliği temsil eden ve tekrar kullanılabilen UI parçalarını oluşturmak için kullanılan directive'lerdir. Bir bileşen, bir template (şablon), bir class (sınıf) ve bir view model (görünüm modeli) içerebilir. Bileşenler, genellikle karmaşık kullanıcı arayüzlerini oluşturmak için kullanılır ve kendilerine özgü stiller ve davranışlar içerebilirler.
 Component en yaygın directive tipidir.

 ### Attribute directive:

 HTML öğelerine özel davranışlar eklemek için kullanılan directive'lerdir. Bir HTML öğesine attribute olarak eklenen directive'ler, o öğenin davranışını veya görünümünü değiştirebilir. Örneğin, ngModel, ngStyle, ngClass gibi yaygın kullanılan attribute directive'ler vardır. Bu tür directive'ler, mevcut HTML öğelerini genişletmek veya yeniden kullanılabilir özel davranışlar eklemek için kullanılabilir.

 ### Structural Directive (Yapısal Directive):

HTML DOM'unu değiştirmek veya manipüle etmek için kullanılan directive'lerdir. Angular'da yapısal directive'ler, DOM'u kontrol etme yeteneği sağlar ve genellikle *ngIf, *ngFor, *ngSwitch gibi yapısal direktiflerle temsil edilir. Bu tür directive'ler, şablonu koşullu olarak render etmek, liste öğelerini döngülemek veya belirli koşullara göre farklı şablonları göstermek için kullanılabilir.

## Angular'da yaygın olarak kullanılan bazı built-in attribute directive'ler şunlardır:

ngModel: Form elemanlarıyla iki yönlü veri bağlama (data binding) sağlar. Bu, form elemanlarının değerlerini bir modelle senkronize etmeyi ve modeldeki değişiklikleri otomatik olarak güncellemeyi mümkün kılar.

ngIf: Belirli bir koşulun doğru olup olmadığına bağlı olarak bir öğenin varlığını veya görünürlüğünü kontrol eder. Koşul doğruysa öğeyi DOM'a ekler, yanlışsa kaldırır.

ngFor: Bir dizi veya nesne koleksiyonunu döngülemek için kullanılır ve her öğe için belirli bir şablonu tekrar tekrar uygular. Örneğin, liste öğelerini oluşturmak için sıkça kullanılır.

ngClass: Bir HTML öğesine dinamik olarak sınıflar eklemek veya kaldırmak için kullanılır. Bu, belirli koşullara göre farklı stilleri uygulamak için kullanışlıdır.

ngStyle: Bir HTML öğesinin stil özelliklerini dinamik olarak ayarlamak için kullanılır. Bu, belirli bir öğe için CSS stil özelliklerini koşullara veya değişkenlere bağlamak için kullanılır.

ngSwitch: Belirli bir değere göre farklı şablonları render etmek için kullanılır. Örneğin, bir ifadenin farklı değerlerine göre farklı bileşenleri veya görünümleri göstermek için kullanılabilir.

Bu built-in attribute directive'ler, Angular uygulamalarında sıkça kullanılan ve sıklıkla ihtiyaç duyulan temel fonksiyonellikleri sağlar. Bunlar, HTML şablonlarını daha dinamik ve etkileşimli hale getirmek için kullanılır.

## Angular'da yerleşik (built-in) yapısal directive'ler şunlardır:

ngIf: Belirli bir koşulun doğru olup olmadığına bağlı olarak bir öğenin varlığını veya görünürlüğünü kontrol eder. Koşul doğruysa öğeyi DOM'a ekler, yanlışsa kaldırır. Örneğin:

````
<div *ngIf="showElement">Gösterilecek Öğe</div>
````

ngFor: Bir dizi veya nesne koleksiyonunu döngülemek için kullanılır ve her öğe için belirli bir şablonu tekrar tekrar uygular. Örneğin:

````
<div *ngFor="let item of items">{{ item }}</div>
````
ngSwitch: Belirli bir değere göre farklı şablonları render etmek için kullanılır. Örneğin, bir ifadenin farklı değerlerine göre farklı bileşenleri veya görünümleri göstermek için kullanılabilir. Örneğin:

````
<div [ngSwitch]="value">
    <div *ngSwitchCase="'A'">A değeri için</div>
    <div *ngSwitchCase="'B'">B değeri için</div>
    <div *ngSwitchDefault>Varsayılan değer</div>
</div>
````

Bu yapısal directive'ler, HTML şablonlarını dinamikleştirmek ve koşullu olarak içeriği kontrol etmek için kullanılır. Her biri belirli bir işlevi yerine getirir ve farklı senaryolar için farklı kullanımlarla birlikte gelir. Bu yapısal directive'ler, Angular uygulamalarında sıklıkla kullanılan ve temel işlevselliği sağlayan önemli araçlardır.