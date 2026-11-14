# Madar Tech – Landing Page

موقع تعريفي لمؤسسة مدار تك — HTML5 · CSS3 · Bootstrap 5 (RTL) · JavaScript

## التشغيل
افتح `index.html` في المتصفح مباشرة. كل المكتبات والخطوط محلية، يعني الصفحة بتشتغل بدون إنترنت.

## هيكل الملفات
```
index.html                 ← هيكل الصفحة (Semantic HTML)
contact.html               ← صفحة تواصل مستقلة ونموذج واتساب
css/style.css              ← التنسيق + الـ Responsive
js/main.js                 ← التفاعلات
assets/img/logo-mark.png   ← شعار مدار تك (خلفية شفافة)
assets/fonts/              ← خط Dahab للعناوين + Tajawal للنصوص + Montserrat للإنجليزي
vendor/                    ← Bootstrap 5.3.3 RTL + Bootstrap Icons
```

## الصفحات والأقسام
- `index.html`: الرئيسية، شريط Hero متحرك، من نحن، الخدمات، البرامج التدريبية، لماذا مدار تك، والفوتر.
- `contact.html`: صفحة تواصل مستقلة تتضمن معلومات التواصل ونموذج واتساب.

## أين تم تطبيق كل متطلب
| المتطلب | مكانه |
|---|---|
| Semantic HTML | `header` `nav` `main` `section` `article` `footer` |
| Flexbox | الـ Navbar والشعار، أزرار الـ Hero، بطاقات البرامج، قوائم التواصل |
| CSS Grid | بطاقات الخدمات `.services-grid`، المميزات `.why-grid`، الرؤية والرسالة `.vm-grid`، الفورم `.form-grid`، الفوتر `.footer-grid` |
| Bootstrap | Navbar + Collapse، نظام الـ `row/col` بقسم البرامج والـ Hero، `form-control` و`invalid-feedback`، الأيقونات |
| Responsive | Breakpoints عند 1200 / 992 / 768 / 576px |
| RTL | `dir="rtl"` + نسخة `bootstrap.rtl` |
| ألوان الهوية | متغيرات CSS في `:root` (`--oxford` `--lime` `--graphite` `--silver`) |

## تفاعلات JavaScript (js/main.js)
1. الـ Navbar بيتغير لونه عند التمرير، وزر "العودة للأعلى" بيظهر.
2. Scrollspy: الرابط النشط بالقائمة بيتغير حسب القسم الظاهر.
3. القائمة المتنقلة بتسكر لحالها بعد اختيار رابط (موبايل).
4. روابط البرامج والحجز تفتح صفحة التواصل مع تعبئة نص الرسالة تلقائياً.
5. ظهور تدريجي للعناصر عند التمرير (IntersectionObserver).
6. شريط Hero يتنقل تلقائياً بين الشرائح، ويتوقف التدوير التلقائي عند تفعيل إعداد تقليل الحركة.
7. نموذج التواصل: تحقق من الحقول ثم فتح واتساب برسالة جاهزة فيها الاسم والإيميل والرقم والرسالة.
8. سنة حقوق النشر بتتحدث تلقائياً.

> ⚠️ رقم الواتساب موجود بأول سطر في `js/main.js` (`WHATSAPP_NUMBER`) — لازم يتغير للرقم الرسمي.
