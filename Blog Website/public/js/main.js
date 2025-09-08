$(document).ready(function () {
  // summernote initialization
  $("#postBody").summernote({
    minHeight: 300,
    maxHeight: 500,
    placeholder: "Enter the body of the post...",
    disableDragAndDrop: true,
    spellCheck: false,
    toolbar: [
      ["style", ["style"]],
      [
        "font",
        ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "clear"],
      ],
      ["para", ["ul", "ol", "paragraph"]],
      ["table", ["table", "hr"]],
      ["insert", ["link", "picture", "video"]],
      ["view", ["fullscreen", "codeview", "help"]],
    ],
    popover: {
      link: [["link", ["linkDialogShow", "unlink"]]],
      table: [
        ["add", ["addRowDown", "addRowUp", "addColLeft", "addColRight"]],
        ["delete", ["deleteRow", "deleteCol", "deleteTable"]],
      ],
    }
  });
});
