"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[9189],{"./packages/components/src/notice/stories/index.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},NoticeListSubcomponent:function(){return NoticeListSubcomponent},WithActions:function(){return WithActions},WithCustomSpokenMessage:function(){return WithCustomSpokenMessage},WithJSXChildren:function(){return WithJSXChildren},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_story}});var react=__webpack_require__("./node_modules/react/index.js"),src_notice=__webpack_require__("./packages/components/src/notice/index.tsx"),src_button=__webpack_require__("./packages/components/src/button/index.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{};function NoticeList({notices:notices,onRemove:onRemove=noop,className:className,children:children}){return className=classnames_default()("components-notice-list",className),(0,jsx_runtime.jsxs)("div",{className:className,children:[children,[...notices].reverse().map((notice=>{const{content:content,...restNotice}=notice;return(0,react.createElement)(src_notice.Z,{...restNotice,key:notice.id,onRemove:(id=notice.id,()=>onRemove(id))},notice.content);var id}))]})}NoticeList.displayName="NoticeList";var list=NoticeList;try{NoticeList.displayName="NoticeList",NoticeList.__docgenInfo={description:"`NoticeList` is a component used to render a collection of notices.\n\n```jsx\nimport { Notice, NoticeList } from `@wordpress/components`;\n\nconst MyNoticeList = () => {\nconst [ notices, setNotices ] = useState( [\n\t{\n\t\tid: 'second-notice',\n\t\tcontent: 'second notice content',\n\t},\n\t{\n\t\tid: 'fist-notice',\n\t\tcontent: 'first notice content',\n\t},\n] );\n\nconst removeNotice = ( id ) => {\n\tsetNotices( notices.filter( ( notice ) => notice.id !== id ) );\n};\n\nreturn <NoticeList notices={ notices } onRemove={ removeNotice } />;\n};\n```",displayName:"NoticeList",props:{notices:{defaultValue:null,description:"Array of notices to render.",name:"notices",required:!0,type:{name:'(Omit<NoticeProps, "children"> & { id: string; content: string; })[]'}},onRemove:{defaultValue:{value:"() => {}"},description:"Function called when a notice should be removed / dismissed.",name:"onRemove",required:!1,type:{name:"(id: string) => void"}},children:{defaultValue:null,description:"Children to be rendered inside the notice list.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/notice/list.tsx#NoticeList"]={docgenInfo:NoticeList.__docgenInfo,name:"NoticeList",path:"packages/components/src/notice/list.tsx#NoticeList"})}catch(__react_docgen_typescript_loader_error){}var index_story={title:"Components/Notice",component:src_notice.Z,subcomponents:{NoticeList:list},parameters:{sourceLink:"packages/components/src/notice",actions:{argTypesRegex:"^on.*"},controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}};const Template=props=>(0,jsx_runtime.jsx)(src_notice.Z,{...props});Template.displayName="Template";const Default=Template.bind({});Default.args={children:"This is a notice."};const WithCustomSpokenMessage=Template.bind({});WithCustomSpokenMessage.args={...Default.args,politeness:"assertive",spokenMessage:"This is a notice with a custom spoken message"};const WithJSXChildren=Template.bind({});WithJSXChildren.args={...Default.args,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("p",{children:["JSX elements can be helpful",(0,jsx_runtime.jsx)("strong",{children:" if you need to format"})," the notice output."]}),(0,jsx_runtime.jsx)("code",{children:"note: in the interest of consistency, this should not be overused!"})]})};const WithActions=Template.bind({});WithActions.args={...Default.args,actions:[{label:"Click me!",onClick:()=>{},variant:"primary"},{label:"Or click me instead!",onClick:()=>{}},{label:"Or visit a link for more info",url:"https://wordpress.org",variant:"link"}]};const NoticeListSubcomponent=()=>{const exampleNotices=[{id:"second-notice",content:"second notice content"},{id:"first-notice",content:"first notice content"}],[notices,setNotices]=(0,react.useState)(exampleNotices);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(list,{notices:notices,onRemove:id=>{setNotices(notices.filter((notice=>notice.id!==id)))}}),(0,jsx_runtime.jsx)(src_button.ZP,{variant:"primary",onClick:()=>{setNotices(exampleNotices)},children:"Reset Notices"})]})};NoticeListSubcomponent.storyName="NoticeList Subcomponent",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"props => {\n  return <Notice {...props} />;\n}",...Default.parameters?.docs?.source}}},WithCustomSpokenMessage.parameters={...WithCustomSpokenMessage.parameters,docs:{...WithCustomSpokenMessage.parameters?.docs,source:{originalSource:"props => {\n  return <Notice {...props} />;\n}",...WithCustomSpokenMessage.parameters?.docs?.source}}},WithJSXChildren.parameters={...WithJSXChildren.parameters,docs:{...WithJSXChildren.parameters?.docs,source:{originalSource:"props => {\n  return <Notice {...props} />;\n}",...WithJSXChildren.parameters?.docs?.source}}},WithActions.parameters={...WithActions.parameters,docs:{...WithActions.parameters?.docs,source:{originalSource:"props => {\n  return <Notice {...props} />;\n}",...WithActions.parameters?.docs?.source}}},NoticeListSubcomponent.parameters={...NoticeListSubcomponent.parameters,docs:{...NoticeListSubcomponent.parameters?.docs,source:{originalSource:"() => {\n  const exampleNotices = [{\n    id: 'second-notice',\n    content: 'second notice content'\n  }, {\n    id: 'first-notice',\n    content: 'first notice content'\n  }];\n  const [notices, setNotices] = useState(exampleNotices);\n  const removeNotice = (id: NoticeListProps['notices'][number]['id']) => {\n    setNotices(notices.filter(notice => notice.id !== id));\n  };\n  const resetNotices = () => {\n    setNotices(exampleNotices);\n  };\n  return <>\n            <NoticeList notices={notices} onRemove={removeNotice} />\n            <Button variant={'primary'} onClick={resetNotices}>\n                Reset Notices\n            </Button>\n        </>;\n}",...NoticeListSubcomponent.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithCustomSpokenMessage","WithJSXChildren","WithActions","NoticeListSubcomponent"]}}]);