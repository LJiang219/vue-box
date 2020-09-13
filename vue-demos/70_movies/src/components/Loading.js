import Modal from "./modal.js";

const template = `
  <Modal v-show="show">
    <template v-slot:cnt >
      <div style="font-size: 1.5em; color: #fff">
        加载中...
      </div>
    </template>
   
  </Modal>
`

export default{
  template, 
  props: {
    show: {
      type: Boolean,
      default: false
    },
  },
  components: {
    Modal
  }
}