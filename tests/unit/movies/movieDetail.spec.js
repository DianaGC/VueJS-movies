import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import MovieDetail from "../../../src/components/MovieDetail";

const localVue = createLocalVue();
localVue.use(Vuetify);

describe("Component MovieDetail.vue", () => {
  let vuetify = new Vuetify()
  beforeEach(() =>{
    vuetify = new Vuetify()
  });
  it('should render ClientModal page', () => {
    const wrapper = mount(MovieDetail);
    expect(wrapper).toBeDefined();
  });

  it('Matches the snapshot', () => {
    const wrapper = mount(MovieDetail, {
      localVue,
      vuetify,
      propsData: {
        movieDetail: '',
        ratings: '',
        dialog: false
      },
    });
    expect(wrapper.html()).toMatchSnapshot()
  });

  it("should emit an event when the action v-btn is clicked", () => {
    const id = "tt0087814";
    const wrapper = mount(MovieDetail, {
      localVue,
      vuetify,
      propsData: {
        movieDetail: '',
        ratings: '',
        dialog: false
      },
    });
    const event = jest.fn();
    const button = wrapper.find('.v-btn');
    wrapper.vm.$on('getBack', event);
    button.trigger('click');
    expect(event).toHaveBeenCalled()
  });

});


