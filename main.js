(()=>{var t,e,n,i={loop:!0,autoWidth:!0,slideBy:1,slideTransition:"ease",dots:!1,smartSpeed:1e3,pullDrag:!1,lazyLoad:!0},o=(e="sliderNote",n="sliderLineNote",{start:function(){this.empty(),this.render()},empty:function(){$("#"+e).empty(),$("#"+n).hide()},render:function(){var t=this;$.ajax("https://seon81.github.io/resource/mock/note.json").success((function(n){var i=n.items.sort((function(){return Math.random()-.5}));i[0].id;var o='<div class="owl-carousel">'+i.reduce((function(t,e,n){return t+'<div class="note__item" data-id="'+e.id+'"><div class="note__item__inner"><img class="note__item__thumb" src="'+e.image+'"><p class="note__item__text">'+e.name+"</p></div></div>"}),"")+"</div>";$("#"+e).html(o),t.run()})).error((function(){})).complete((function(){}))},run:function(){var o=this;$("#"+n).show(),t=$("#"+e).find(".owl-carousel").owlCarousel(Object.assign(i,{margin:10,onInitialized:this.setCurrentItem})),$("#sectionNote").on("click",".owl-next",(function(){t.trigger("next.owl.carousel")})),t.on("changed.owl.carousel",(function(){o.setCurrentItem()}))},setCurrentItem:function(){setTimeout((function(){var t=$("#sectionNote .owl-item.active");t.eq(0).addClass("current").siblings().removeClass("current"),t.eq(1).addClass("next").siblings().removeClass("next")}),100)}}),r=function(t){var e,n,r="sliderTutor",s="sliderLineTutor";return{start:function(){this.empty(),this.render()},empty:function(){$("#"+r).empty(),$("#"+s).hide()},render:function(){var t=this;$.ajax("https://seon81.github.io/resource/mock/users.json").success((function(e){var i=e.users,o=i.sort((function(){return Math.random()-.5})).slice(0,10);n=""+i[0].id;var s='<div class="owl-carousel">'+o.reduce((function(t,e,n){var i=e.firstName+" "+e.lastName;return t+'<div class="tutor__item" data-id="'+e.id+'"><img class="tutor__item__thumb" src="'+e.image+'"><p class="tutor__item__text">'+i+'</p><div class="owl-line owl-line-horizental"></div></div>'}),"")+"</div>";$("#"+r).html(s),t.run()})).error((function(){})).complete((function(){o.start(n)}))},run:function(){$("#"+s).show(),e=$("#"+r).find(".owl-carousel").owlCarousel(Object.assign(i,{margin:20})),$("#sectionTutor").on("click",".owl-next",(function(){e.trigger("next.owl.carousel")})),e.on("translated.owl.carousel",(function(){var t=e.find(".owl-item.active").eq(0).find(".tutor__item").attr("data-id");t!==n&&(n=t,o.start(n))}))}}}(),s=function(t){var e,n,o="sliderCollege";return{start:function(){this.empty(),this.render()},empty:function(){$("#"+o).empty()},render:function(){var t=this;$.ajax("https://seon81.github.io/resource/mock/colleague.json").success((function(e){var i=e.items;n=""+i[0].id;var r='<div class="owl-carousel">'+i.reduce((function(t,e,n){return t+'<div class="college__item" data-id="'+e.id+'">\t<img class="college__item__thumb" src="'+e.image+'">\t<p class="college__item__text">'+e.name+"</p></div>"}),"")+"</div>";$("#"+o).html(r),t.run()})).error((function(){})).complete((function(){r.start(n)}))},run:function(){e=$("#"+o).find(".owl-carousel").owlCarousel(Object.assign(i,{margin:20})),$("#sectionCollege").on("click",".owl-next",(function(){e.trigger("next.owl.carousel")})),e.on("translated.owl.carousel",(function(){var t=e.find(".owl-item.active").eq(0).find(".college__item").attr("data-id");t!==n&&(n=t,r.start(n))}))}}}();window.MainVisual={start:function(){s.start()}}})();