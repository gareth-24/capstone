"use client";

import usePreviewModel from "@/hooks/use-preview-model";

const PreviewModel = () => {
  const previewModel = usePreviewModel();
  const product = usePreviewModel((state) => state.data);

  return (
    <div>

    </div>
  );
}

export default usePreviewModel;