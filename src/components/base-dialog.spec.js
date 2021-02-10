import { shallowMount } from '@vue/test-utils';
import BaseDialog from './base-dialog.vue';

const defaultTitle = 'dialog title';
const factory = (propsData) => shallowMount(BaseDialog, {
  propsData: { title: defaultTitle, ...propsData },
});

describe('base-dialog.vue', function () {
  it('displays the dialog title', function () {
    const wrapper = factory();
    const titleText = wrapper.find('h4').text();

    expect(titleText).toBe(defaultTitle);
  });
});
