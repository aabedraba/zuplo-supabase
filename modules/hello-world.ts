import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  const formData = await request.formData()

  formData.forEach(data => {
    context.log.info(data);
  })

  return "What zup?";
}
