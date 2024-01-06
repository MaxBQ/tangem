import{j as t}from"./jsx-runtime-AgcCsxC8.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const e=r=>t.jsx("div",{className:"app",children:t.jsx(r,{})});try{e.displayName="StyleDecorator",e.__docgenInfo={description:"",displayName:"StyleDecorator",props:{decorators:{defaultValue:null,description:`Wrapper components or Storybook decorators that wrap a story.

Decorators defined in Meta will be applied to every story variation.
@see [Decorators](https://storybook.js.org/docs/addons/introduction/#1-decorators)`,name:"decorators",required:!1,type:{name:"DecoratorFunction<ReactRenderer, { [x: string]: any; }> | DecoratorFunction<ReactRenderer, { [x: string]: any; }>[]"}},parameters:{defaultValue:null,description:`Custom metadata for a story.
@see [Parameters](https://storybook.js.org/docs/basics/writing-stories/#parameters)`,name:"parameters",required:!1,type:{name:"Parameters"}},args:{defaultValue:null,description:`Dynamic data that are provided (and possibly updated by) Storybook and its addons.
@see [Arg story inputs](https://storybook.js.org/docs/react/api/csf#args-story-inputs)`,name:"args",required:!1,type:{name:"Partial<Args>"}},argTypes:{defaultValue:null,description:"ArgTypes encode basic metadata for args, such as `name`, `description`, `defaultValue` for an arg. These get automatically filled in by Storybook Docs.\n@see [Control annotations](https://github.com/storybookjs/storybook/blob/91e9dee33faa8eff0b342a366845de7100415367/addons/controls/README.md#control-annotations)",name:"argTypes",required:!1,type:{name:"Partial<ArgTypes<Args>>"}},loaders:{defaultValue:null,description:`Asynchronous functions which provide data for a story.
@see [Loaders](https://storybook.js.org/docs/react/writing-stories/loaders)`,name:"loaders",required:!1,type:{name:"LoaderFunction<ReactRenderer, Args> | LoaderFunction<ReactRenderer, Args>[]"}},render:{defaultValue:null,description:"Define a custom render function for the story(ies). If not passed, a default render function by the renderer will be used.",name:"render",required:!1,type:{name:"ArgsStoryFn<ReactRenderer, Args>"}},storyName:{defaultValue:null,description:"Override the display name in the UI (CSF v2)",name:"storyName",required:!1,type:{name:"string"}},play:{defaultValue:null,description:"Function that is executed after the story is rendered.",name:"play",required:!1,type:{name:"PlayFunction<ReactRenderer, Args>"}},tags:{defaultValue:null,description:"Named tags for a story, used to filter stories in different contexts.",name:"tags",required:!1,type:{name:"string[]"}},story:{defaultValue:null,description:"@deprecated",name:"story",required:!1,type:{name:'Omit<StoryAnnotations<ReactRenderer, Args, Partial<Args>>, "story">'}}}}}catch{}const n={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[e]};export{n as default};