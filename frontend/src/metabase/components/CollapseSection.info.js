import React from "react";
import CollapseSection from "metabase/components/CollapseSection";

export const component = CollapseSection;
export const category = "layout";
export const description = `
A collapsible section with a clickable header.
`;

export const examples = {
  "Closed by default": (
    <CollapseSection headerText="Section header">
      foo foo foo foo foo foo foo foo
    </CollapseSection>
  ),
  "Settable initial state": (
    <CollapseSection initialState="open" headerText="Foo">
      foo foo foo foo foo
    </CollapseSection>
  ),
  "Header Icon": (
    <CollapseSection headerIconName="folder" headerText="<-- folder icon">
      foo foo foo foo foo
    </CollapseSection>
  ),
  "Header and body classes": (
    <CollapseSection
      initialState="open"
      headerText="Section header"
      headerClass="text-brand flex-reverse justify-between p1 border-bottom"
      bodyClass="p2"
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque
        tellus, mattis ut felis non, tempus mollis lacus. Vivamus nulla massa,
        accumsan non ligula eu, dapibus volutpat libero. Mauris sollicitudin
        dolor et ipsum fringilla auctor. Praesent et diam non nisi consequat
        ornare. Aenean et risus vel dolor maximus dapibus a id massa. Nam
        finibus quis libero eu finibus. Sed vehicula ac enim pellentesque
        luctus. Phasellus vehicula et ipsum porttitor mollis. Fusce blandit
        lacus a elit pretium, vestibulum porta nisi vehicula. Aliquam vel ligula
        enim. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Pellentesque eget porta mi. Duis et lectus eget
        dolor convallis mollis. Sed commodo nec urna eget egestas.
        <br />
        <br />
        Mauris in ante sit amet ipsum tempus consequat. Curabitur auctor massa
        vitae dui auctor scelerisque. Donec in leo a libero commodo sodales.
        Integer egestas lacinia elit, vitae cursus sem mollis ut. Proin ut
        dapibus metus, vel accumsan justo. Pellentesque eget finibus elit, ut
        commodo felis. Ut non lacinia metus. Maecenas eget bibendum nisl.
      </div>
    </CollapseSection>
  ),
};
