// Start Toggle Menu

let bars = document.querySelector("#bars")
let menu = document.getElementById("menu")
let menuItems = document.getElementById("menu-items")
let xBtn = document.getElementById("x-btn")
let transparent = document.getElementById("transparent-layer")
let test = document.querySelectorAll('.test')


bars.addEventListener('click', openMenu ) 

//closes subMenu when section is clicked
for (let i = 0; i < test.length;i++) {
    test[i].addEventListener('click', closeMenu)
}


xBtn.onclick = closeMenu
transparent.addEventListener('click', closeMenu)

// Hide Menu CSS styling
function closeMenu() {
    menu.style.visibility = "hidden"
    menu.style.opacity = "0"
    menuItems.style.left = "-329px"
}

function openMenu() {
        menu.style.left = "0"
        menu.style.visibility = "visible"
        menu.style.opacity = "1"
        menuItems.style.left = "0"
    
} 
// End Toggle Menu

// start blog
let blog = document.getElementById('blog')
let readMore = document.querySelectorAll('.read-more')


readMore.forEach(function (element, index) {
    let topicHeadArray = [
        "Inbound Marketing-Intro",
        "Inbound Marketing-What?",
        "Why do employees leave?",
        "How to be successful?",
        "Business's costs types",
        "Business Metrics"
    ]
    let topicParagraphArray = [
        `لو أنت بتدور على خدمة معينة مثلا زي العلاج الطبيعي أو عندك بس آلام في ضهرك بعد إصابة طويلة والدكتور قالك أن في ظرف شهور هتحتاج علاج طبيعي أو حتى بس مجرد عندك آلام وفجأة لقيت دكتور بيتكلم عن الألم إللي أنت حاسس بيه وبيشرح بالتفاصيل كل الحالات وبيفهمك بالظبط إللي أنت محتاجه, هتعمل إيه؟ سواء أنت جاهز تشتري أو لا, الدكتور ده حط نفسه كخبير في المجال ده وبدأ يمشي بيك خطوة خطوة في طريق أنواع العملاء إللي حضرتك ماشي بثقة أنت تبقى واحد منهم يعني ببساطة هو بأنه بيديك معلومات قيمة بدأ في عملية التسويق بدون إعلان مباشر ومش كده وبس لا ده كمان خلى الإعلان بتاعه "يصطاد" بالظبط نوع العملاء إللي هيبقى أو بالفعل interested في المنتج أو الخدمة بتاعتك يلا بينا في السلسلة دي إللي ده أول بوست فيها هنتعرف على واحد من أهم المصطلحات في عالم التسويق وهو الـ Inbound Marketing أو التسويق الداخلي استنونا عشان نعرف كل اللي محتاجين نعرفه عن المصطلح المهم ده.`,
        `93% من قرارات الشراء أون لاين بتبدأ بـ Search على الإنترنت... يعني ببساطة لو الشركة قدرت تخلق محتوى يكون مرجع لقرارات الشراء دي هتبقى المؤثر في 93% من الأوقات ! هو ده الـ Inbound Marketing أو التسويق الداخلي وإللي مش بس بيساعد في زيادة المبيعات لكن أولا بيساعد وبقوة أن الشركة تزود الوعي بالعلامة التجارية وتحط لنفسها Positioning أنها الخبير في المجال فتزود قوة تأثيرها في قرار الشراء. الجميل أن التسويق الداخلي يعتبر مغناطيس للفئة المستهدفة للشركة عشان بيجيب بالظبط الفئة الـ Interested غير أن فيه قانون غير معلن أن تكلفة الإستحواذ على العميل بالتسويق الداخلي أقل وبكتير من الإعلانات المدفوعة (من غير محتوى هادف) غير أنه بيمشي مع العميل خطوة خطوة في الـ Sales Funnel السلسلة مكملة عشان إحنا إنهاردة بس إتكلمنا في الـ What لكن لسة هنكمل كل المراحل عشان نعرف الـ How والـ Why والـ What if كمان.`,
        `ليه الموظفين بيسيبوا الشركة أو بيقرروا أنهم يكملوا فيها؟ طبقا لدراسات عدة, فالعوامل إللي في البوست ده هي إللي بتحدد نسبة دوران العمالة في الشركة وكمان نسبة رضا الموظفين وهما كالأتي:
        1- المدير: محدش بيسيب الشغل, الموظف بيسيب مدير سيء, لو عايز تعرف أنواع المديرين الكويسين والسيئين إتفرج على الفيديوهين إللي في اللينكات دي:
        https://lnkd.in/eXFxSZX2
        https://lnkd.in/eWRabw7a
        2- الإدارة: ممكن يكون مديرك كويس بس الإدارة سيئة عليكوا أنتم الأتنين, لو عايز تعرف الإدارة الكويسة إدخل على اللينك ده: https://lnkd.in/eEUAZ23x
        3- المرتب: كلنا واحد من دوافعنا للشغل أننا نقدر نعيش مستريحين فالمرتب في كل الدراسات كان واحد من أهم تلات أسباب.
        4- المزايا: كل ما الفئة العمرية للموظفين بتزيد كل ما أحتياجهم وتقديرهم بيزيد للمزايا زي التأمين الطبي والأجتماعي وغيرهم.
        5- بيئة العمل: الناس كلها بدأت تفهم أهمية بيئة العمل المريحة يعني مفيهاش تنمر ولا عنصرية ولا إساءة من أي نوع.
        6- المسار الوظيفي: الموظف عشان يكمل محتاج يبقى عارف أن فيه فرصة للترقية وإلا هيبدأ يحس أنه في dead end.
        7- التدريب والتطوير: وكمان لازم يحس أن فيه فرص للتدريب والتطوير عشان ميحسش أنه stagnant في مكانه .
        8- ضغط العمل: الموظف بيحس أنه مخنوق لو ضغط الشغل كتير وفيه دراسات قالت أنه ممكن يمشي لو حاسس أن ضغط العمل قليل ومبيعملش حاجة.
        9- تصميم العمل: لازم الموظف يحس أنه بيدي قيمة للشغل وأن عمله مصمم بشكل يخليه مورد مهم للشركة.
        10- الأمان: الموظف لازم يحس أن في أمان في الشركة يعني الشركة مش في خطر الإفلاس أو أنهم بيعملوا down sizing`,
        `إزاي أكون موظف / مدير / صاحب عمل متميز و شاطر؟ غريب العنوان جدا لأ أكيد مؤهلات كل منصب من دول غير التاني لكن البوست دة هيتكلم عن إيه هي الصفات السلوكية إللي المفروض تكون في الإنسان المحترف عشان نبدأ نتكلم يعني لو الإنسان فيه الأربع صفات دول فكده على حسب باقي المؤهلات والتفضيلات وغيره ممكن نبني إللي إحنا عايزينه بسهولة. أول صفة سلوكية ممكن نسميها "ثقافة التحرك" يعني لو إنت شغال في تيم وحد غيرك عمل حاجة غلط, لازم تبدأ تفكر نعمل إيه عشان نصلح اه بس دي مش غلطتي !! والله عارفين وأنت لازم تتعلم تثبت إنها مش غلطتك عشان تعرف تدي Feedback للراجل الغلطان يطور من نفسه بس المهم المركب تمشي دلوقتي ونمشيها كلنا مش نقف نشتم في بعض لازم يكون عندك Attitude يخليك تفرق بين مصطلحين مهمين إللي هما "الغلطة" و "المسئولية" الموضوع مثلا إللي فوق مش غلطتك بس مسئوليتك. تاني صفة سلوكية هي "النضوج" و النضوج ملهوش دعوة بالسن يعني ممكن راجل عنده أربعين سنة وتلاقيه متمسك برأيه لمجرد التمسك وبيعلي صوته وبيسيب الإجتماع ويطلع متنرفز وحاجة آخر مراهقة لازم يكون عندك Attitude إن الشغل مش حياتنا فمينفعش نشخصن الأمور ونقف لبعض على الواحدة ولا إننا لازم نبقى الأقوى والأذكى ولا إننا خالدين فهناخد الكرسي والمكان معانا. تالت صفة سلوكية هي "التواصل" سامعك ياللي بتقول إن التواصل مهارة بس صدقني التواصل ملوش أي لازمة لو من غير الـ Attitude الصح طيب من غير كلام كبير, أكمله إزاي؟ أهم حاجة الـ Listening الصح
        `,
        `على القائد ان يراعي التكاليف الصغيرة, فالثقب الصغير يملك كامل المقدرة على إغراق أعظم السفن" بنجامين فرانلكين أهم عامل لفشل الشركات الصغيرة والمتوسطة (SMEs) وتاني أهم عامل لفشل الشركات الناشئة (Startups) يمكن نسبها للتخطيط المالي التخطيط المالي لا يمكن الدخول في تفاصيله بدون أولا السيطرة على ومعرفة كافة التكاليف إللي ممكن مشروعك وشركتك يتحملها البوست دة أول واحد من سلسلة طويلة حنبدأ فيها نتعلم المصطلحات المهمة لكل Business Function موجودة في عالم إدارة الأعمال ملقناش Business Function أهم من الـ Finance & Accounting ولا طريقة أحسن من الـ Story Telling عشان نتعرف بيها على اهم مصطلحات المجال خلينا نقول ان في واحد اسمه "باسم" عنده مشروع صغير, وعايز يدرس الموضوع ماليا عشان بيخسر ومش عارف ليه أول حاجة بدأ يدرسها هي الـ Net Profit أو الربح الصافي وعشان يعرف يحسب دة كان لازم يعرف الـ Revenues أو الإيرادات للمشروع وكمان الـ Expenses أو التكاليف, طب ليه؟ عشان صافي الربح هو ببساطة بيساوي الايرادات لما تشيل منها التكاليف, بس الموضوع طلع مش بالبساطة دي "باسم" لقى نفسه عنده أنواع تكاليف كتير جدا أولا لقى نفسه بيدفع Direct Costs أو تكاليف مباشرة في الأكل, تمن الأكل إللي بيبيعه للعميل وكدة لازم يقعد يحسب كل جرام أكل وتوبينج وورق وأطباق وكوبايات وغيره مش كدة وبس لا كمان بيدفع مرتبات الطقم بتاع المطبخ من طباخ ومناصب ناس بتساعده جوة المطبخ`,
        `"لا ياعم أنا دخلت تسويق وبعدت عن المحاسبة عشان مبحبش الأرقام" "تصدق، الحمد لله إن الواحد حيشتغل إتش أر عشان ميبقاش في تعامل مع أرقام خالص"
        أكبر غلط، البوست دة مش طويل لان هدفه مش معلومات بس هدفه تغيير تفكير أو عقلية. لازم تفهم إن مادام دخلت عالم البيزنس سواء كموظف أو كصاحب عمل أو كرائد أعمال و في صناعة وفي أي مجال فالأرقام هي مفروض تكون أعلى صوت وإلا الآراء حتتكلم. شغال في التسويق، لازم تحول آراء الناس لأرقام عشان تختار لون العبوة الجديد ولا أعداد الناس إللي جوة سوقنا المستهدف عشان تختار مكان اليافطة الجديدة شغال في الموارد البشرية، لازم تحول أداء الموظفين لرقم وكمان سلوكهم عشان تعرف تحاسبهم ولا تشوف مرتبات شركتك أقل من المنافسين بنسبة كام عشان تعرف الناس حتسيبك ولا لا عندك البزنس بتاعك، طب شوف كدة حاطط كام فلوس وجالك كام عشان تشوف شكل من أشكال العائد الإستثماري ولا شوف ميزانيتك بتصرف كام على التكاليف المباشرة وغيره. الشركات إللي مفيهاش أرقام الغلبة فيها لأصحاب الصوت العالي وده بيعمل ثقافة سيئة جدا جدا. الشركات إللي بتكبر هي إللي بتجمع Data وبتعرف تجيب Insights وتحط Metrics وتدي للموظفين KPIs وفي الأخر تطلع business Analytics.
        `
        
    ]

    element.addEventListener('click', function () {
        console.log(element[1])
        let div = document.createElement("div")
        let divTwo = document.createElement("div")
        let newDivOne = div
        let body = document.querySelector('body')

        newDivOne.setAttribute("class", "blog-content-wrapper")

        let subNewDiv = divTwo
        
        subNewDiv.setAttribute('class', 'blog-content')



        subNewDiv.innerHTML = `<div><h1>${topicHeadArray[index]}</h1> <i class="fa-solid fa-xmark"></i></div> <hr> <div>${topicParagraphArray[index]}</div>`


        body.appendChild(newDivOne)
        newDivOne.appendChild(subNewDiv)




        //close blog-content after done
        let dd = document.querySelector('.blog-content-wrapper')
        dd.onclick = function () {
            newDivOne.remove()
        }
    })
})

// end blog



//Copyright year dynamically

let year = document.querySelector('.year')

let dateNow = new Date().getFullYear()

year.innerHTML = dateNow

//Emerging section smoothly

let sections = document.querySelectorAll('.items')
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        if(entry.target.classList.contains("right")) {
            entry.target.classList.add("fadeInRight");
        } else if (entry.target.classList.contains("left")) {
            entry.target.classList.add("fadeInLeft");
        } else if (entry.target.classList.contains("bottom")){
            entry.target.classList.add("fadeInBottom");
        } else {
            entry.target.classList.add("fadeInTop");
        }
    } else {
      entry.target.classList.remove("active");
    }
  });
});
sections.forEach(section => {
  observer.observe(section);
});


// start scroll

class ScrlBtn {
    constructor() {
        // Bind the click event to the scrollUp function
        this.btn = document.querySelector('.scrl-btn');
        this.btn.addEventListener('click', this.scrollUp.bind(this));
    }

    scrollUp() {
        // Scroll to the top of the page with a smooth animation
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });
    }
}

// Initialize the ScrlBtn class
const scrollButton = new ScrlBtn();

function displayOnScroll() {
    // Get the target element
    const target = document.querySelector('.scrl-btn');

    // Get the current scroll position
    const currentScroll = window.pageYOffset;

    // Show the target element when the current scroll is greater than 50px
    if (currentScroll > 900    ) {
        target.style.opacity = '1';
        target.style.visibility = 'visible';
    }  else if (document.body.scrollTop === 0 ) {
        target.style.opacity = '0';
        target.style.visibility = 'hidden';

    } else {
        target.style.opacity = '0';
        target.style.visibility = 'hidden';
    }
}

// Call the function on scroll
document.addEventListener('scroll', displayOnScroll);

// end sroll 









