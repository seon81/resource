window.MainVisual=function(t){var n,o=".owl-item",e=".owl-item.center",i="to.owl.carousel",a="translated.owl.carousel",c="destroy.owl.carousel",r="dragged.owl.carousel",s={center:!0,loop:!0,autoWidth:!0,slideTransition:"ease",dots:!1,smartSpeed:1e3},u=[],l={};function m(){$("#targetUniversityName").html(n.name),$(".target__university").show()}var d,v,p=(v="mentorSlider",{start:function(){this.empty(),m(),this.render()},empty:function(){$("#".concat(v)).trigger(c),$("#".concat(v)).empty()},render:function(){var t=l[n.code];if(t.length){var o="\n\t\t\t\t".concat(t.reduce((function(t,o,e){var i=(o.first_name?o.first_name+" ":"")+(o.last_name?o.last_name:""),a=o.thumbnail_profile_image?o.thumbnail_profile_image:"https://cdn.imweb.me/thumbnail/20230419/5806a38f57e18.png",c=o.department.name?o.department.name:"",r=o.material_count>0?'<div class="mentor__note">'.concat(material_count," Study Notes</div>"):'<div class="mentor__note mentor__note--preparing">Preparing</div>';return t+'\n\t\t\t\t\t\t\t<div class="mentor">\n\t\t\t\t\t\t\t\t<div class="mentor__university">\n\t\t\t\t\t\t\t\t\t<img src="'.concat(n.logo,'" alt="">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="mentor__thumb">\n\t\t\t\t\t\t\t\t\t<img src="').concat(a,'" alt="">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="mentor__info">\n\t\t\t\t\t\t\t\t\t<div class="mentor__name">').concat(i,'</div>\n\t\t\t\t\t\t\t\t\t<div class="mentor__department">').concat(c,"</div>\n\t\t\t\t\t\t\t\t\t").concat(r,"\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>")}),"")).replace(/[\t\n]/g,"");$("#".concat(v)).html(o),this.run()}},run:function(){d=$("#".concat(v)),setTimeout((function(){d.owlCarousel(Object.assign(s,{margin:20})),d.on(r,(function(){f.stopAutoplay()}))}),100)}}),f=function(t){var c,l="universitySlider";return{start:function(){this.render()},empty:function(){$("#".concat(l)).empty()},render:function(){var t="\n\t\t\t\t".concat(u.reduce((function(t,n,o){return t+'\n\t\t\t\t\t\t\t<div class="university" data-id="'.concat(n.code,'" data-position="').concat(o,'">\n\t\t\t\t\t\t\t\t<div class="university__thumb">\n\t\t\t\t\t\t\t\t\t<img src="').concat(n.logo,'" alt="">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="university__name">').concat(n.name,"</div>\n\t\t\t\t\t\t\t</div>")}),""),"\n\t\t\t\t").replace(/[\t\n]/g,"");$("#".concat(l)).html(t),m(),this.run(),p.start()},run:function(){var t=this;c=$("#".concat(l)),setTimeout((function(){c.owlCarousel(Object.assign({},s,{margin:10,autoplay:!0,autoplayTimeout:4e3})),c.on(a,(function(){var t=c.find(e).find(".university").attr("data-id");t!==n.code&&(n=u.find((function(n){return n.code===t})),p.start())})),c.on(r,(function(){t.stopAutoplay()})),c.on("click",o,(function(){var t=$(this).find(".university").data("position");c.trigger(i,[t,600,!0])}))}),100)},stopAutoplay:function(){c.trigger("stop.owl.autoplay")},playAutoplay:function(){c.trigger("play.owl.autoplay",[4e3])}}}();return{init:function(){f.empty(),p.empty()},start:function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"live";if(!t)throw Error("Required Service Name");this.init();var e="live"===o?"":"".concat(o,"-"),i="local"===o?"https://seon81.github.io/resource/mock/universities_mentors.json":"https://".concat(e,"api.wematchnow.com/ext/myroom/v1/common/get/school/mentor/").concat(t);$.ajax(i).success((function(t){!function(t){0===t.code&&t.value.school_list.forEach((function(t){var o,e=t.code;u.push({code:e,name:(o=t,(o.school_group?"<em>".concat(o.school_group,"</em>&nbsp;"):"")+(o.city?o.city:"")),logo:t.logo_img_url}),l[e]=t.mentor_list,n=u[0]}))}(t),0===t.code&&f.start()})).error((function(t){}))}}}();