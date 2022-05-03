import { TinyMCE } from "tinymce";

import Plugin from "../../main/ts/Plugin";

declare let tinymce: TinyMCE;

Plugin();

tinymce.init({
  selector: "textarea.tinymce",
  plugins: "code geo-image",
  toolbar: "geo-image | code",
});
