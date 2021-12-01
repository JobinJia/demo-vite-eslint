import {defineComponent, PropType, toRef, VNode} from "vue";

export default defineComponent({
  name: 'Icon',
  props: {
    icon: {
      type: Function as PropType<any>
    }
  },
  setup (props) {
    const icon = toRef(props, 'icon')
    return () => {
      return (
        <div>
          Icon Component:
          <br/>
          { icon.value() }
        </div>
      )
    }
  }
})
