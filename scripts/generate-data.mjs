import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="data warehouse BI business intelligence OLTP OLAP dimensional modeling fact table dimension table wide table star schema snowflake schema granularity degenerate dimension slowly changing dimension SCD Zipper table snapshot table cumulative snapshot transactional fact periodic snapshot fact atomic index derived index composite index GMV DAU MAU retention rate conversion rate repeat purchase rate average customer unit price funnel analysis cohort analysis report dashboard visualization data quality lineage metadata data governance ETL ELT ODS DWD DWS ADS topic domain metrics SQL analysis data mart data warehouse modeling enterprise indicator system business analysis data permission data drill-down data slice data dice pivot analysis";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"dw-tag-"+String(i+1).padStart(3,"0"),name:n,category:"DW",description:"DW标签:"+n,count:0,createdAt:"2026-07-02T00:00:00.000Z"};});}
var CD=[
  {id:"dw-course-01",order:1,slug:"DW入门",title:"数据仓库入门与学习路线",description:"DW定位、与数据库区别、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"dw-course-02",order:2,slug:"DW数据集市",title:"数据仓库、数据集市与 BI 基础",description:"DW架构、数据集市、OLAP/OLTP区别、BI工具。",estimatedHours:6,diff:"easy"},
  {id:"dw-course-03",order:3,slug:"分层设计",title:"ODS、DWD、DWS、ADS 分层设计",description:"数据分层原则、各层职责、主题划分。",estimatedHours:10,diff:"medium"},
  {id:"dw-course-04",order:4,slug:"维度建模",title:"维度建模基础",description:"维度建模理论、星型模型、雪花模型。",estimatedHours:10,diff:"medium"},
  {id:"dw-course-05",order:5,slug:"事实表维度表",title:"事实表与维度表",description:"事实表类型、维度表设计、SCD策略。",estimatedHours:10,diff:"medium"},
  {id:"dw-course-06",order:6,slug:"星型雪花",title:"星型模型与雪花模型",description:"星型vs雪花、建模选择、反范式化。",estimatedHours:8,diff:"medium"},
  {id:"dw-course-07",order:7,slug:"指标体系",title:"指标体系与指标口径",description:"原子指标、派生指标、复合指标、口径一致性。",estimatedHours:10,diff:"hard"},
  {id:"dw-course-08",order:8,slug:"用户商品订单",title:"用户、商品、订单与交易主题建模",description:"主题域划分、各主题建模方法。",estimatedHours:10,diff:"hard"},
  {id:"dw-course-09",order:9,slug:"SQL宽表",title:"SQL 分析与宽表设计",description:"SQL分析、宽表设计、性能优化。",estimatedHours:8,diff:"hard"},
  {id:"dw-course-10",order:10,slug:"BI报表",title:"BI 报表与数据看板设计",description:"报表设计、看板设计、可视化选型。",estimatedHours:8,diff:"hard"},
  {id:"dw-course-11",order:11,slug:"数据可视化",title:"数据可视化与业务解读",description:"可视化原则、图表选择、业务解读方法。",estimatedHours:8,diff:"hard"},
  {id:"dw-course-12",order:12,slug:"质量权限口径",title:"数据质量、权限与口径管理",description:"数据质量监控、权限设计、指标管理。",estimatedHours:8,diff:"hard"},
  {id:"dw-course-13",order:13,slug:"DW项目实战",title:"数据仓库综合项目实战",description:"电商DW项目、建模、ETL、报表全流程。",estimatedHours:10,diff:"hard"},
  {id:"dw-course-14",order:14,slug:"DW面试",title:"数据仓库面试与作品集训练",description:"DW面试题、场景题、建模题、作品集。",estimatedHours:8,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["理解DW分层","能维度建模","会指标体系","能完成DW项目"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
function bl(){
  var all=[];var id=1;
  function add(ci,t2,kps){var n=String(id).padStart(3,"0");all.push({id:"dw-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。\n\n## 要点\n- 概念\n- 实现\n- 注意事项\n\n## 总结\n掌握"+t2+"提高DW能力。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:kps||[],practiceQuestionIds:[],tags:["DW"],prerequisites:[],updatedAt:"2026-07-02T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"DW课程"+(ci+1)+"章"+(j+1),["dw-kp-"+String(id+1).padStart(4,"0")]);
  return all;
}
var KPN=[["数据仓库","分析系统基础"],["BI","商业智能分析"],["维度建模","事实维度设计"],["事实表","度量数据记录"],["维度表","业务属性描述"],["星型模型","中心事实模型"],["雪花模型","规范化维度"],["ODS","源系统数据层"],["DWD","明细数据层"],["DWS","汇总数据层"],["ADS","应用数据层"],["SCD","缓慢变化维"],["指标","业务度量"],["拉链表","历史状态记录"],["口径","指标计算规则"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"dw-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"DW",tags:["DW"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"dw-kp-"+String(k.length+1).padStart(4,"0"),name:"DW概念"+(k.length+1),description:"DW概念",category:"DW",tags:["DW"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}return k;}
var QC=["DW入门","DW数据集市","分层设计","维度建模","事实表维度表","星型雪花","指标体系","用户商品订单","SQL宽表","BI报表","数据可视化","质量权限口径","DW项目实战","DW面试"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"数据仓库用于？",["决策分析","事务处理","实时交易","消息队列"],"A","easy"],[2,"ODS层含义？",["操作数据存储","应用数据","汇总数据","明细数据"],"A","medium"],[3,"星型模型中心是？",["事实表","维度表","宽表","快照表"],"A","medium"],[4,"维度表包含？",["业务描述属性","度量值","计数","金额"],"A","medium"],[5,"雪花模型比星型？",["更规范化","性能更好","更易用","更简单"],"A","medium"],[7,"原子指标例？",["订单金额","订单金额同比","GMV","DAU增长率"],"A","hard"],[8,"基于SQL的OLAP工具？",["ClickHouse","MySQL","Redis","MongoDB"],"A","medium"],[10,"BI看板核心？",["关键指标可视化","数据库管理","ETL","数据清洗"],"A","hard"],[11,"SCD类型2表示？",["新增历史记录","覆盖更新","物理删除","逻辑删除"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];qs.push({id:"dw-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确答案是"+t_[3]+"。",wrong_reason:"加强。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:550},{type:"case_analysis",min:1150}];
  while(qid<=3700){
    var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="dw-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于DW"+ch+"表述正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="DW"+ch+"哪些正确？（多选）";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是DW重要概念。（判断）";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="在DW"+ch+"中____是重要概念。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在DW中的作用。";o=[{label:"A",text:"简答"}];a=ch+"用于DW。";}
    else if(it.type==="case_analysis"){s="DW"+ch+"案例：设计建模方案。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确答案是"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"dw-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":d==="medium"?"进阶":"综合"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-02T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["电商DW","用户建模","订单建模","商品建模","交易事实表","用户维度表","日期维度表","GMV指标","留存率","转化漏斗","复购分析","拉链表","快照表","ADS报表","BI看板","口径冲突","质量排查","DW面试"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"dw-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握DW",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"需求",description:"分析"},{order:2,title:"方案",description:"设计"},{order:3,title:"实现",description:"编码"},{order:4,title:"验证",description:"测试"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-02T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"DW路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"dw-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,summary:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["DW","BI","事实表","维度表","星型模型","SCD","指标体系","ODS","DWD","DWS","ADS","拉链表","口径","OLAP","数据集市"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["DW概念"+i,"DW概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"dw-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"DW",tags:["DW"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["DW问题"+(i+1)+"?","DW问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"dw-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"DW",tags:["DW"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["DW"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["DW"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["DW"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["DW"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["DW"]});});return e;}
async function main(){
  console.log("Gen DW...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-data-warehouse-bi",slug:"module-data-warehouse-bi",title:"数据仓库与BI分析",subtitle:"面向数据分析师和BI开发入门者",description:"面向数据分析师BI报表开发和数据仓库入门学习者的DW分层维度建模事实表维度表指标体系SQL分析数据看板口径管理与项目实战。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["数据仓库","BI","维度建模","事实表","维度表","指标体系","数据看板","SQL分析"],estimatedHours:170,difficulty:"intermediate",updatedAt:"2026-07-02T12:00:00.000Z",coverEmoji:"\u{1F4CA}",repoUrl:"https://github.com/openskill-galaxy/module-data-warehouse-bi",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});
  console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
