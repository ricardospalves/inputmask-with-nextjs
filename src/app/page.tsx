import { BRLField } from "@/components/BRLField";
import { CEPField } from "@/components/CEPField";
import { CNPJField } from "@/components/CNPJField";
import { CPFField } from "@/components/CPFField";
import { PhoneField } from "@/components/PhoneField";

export default function Home() {
  return (
    <main>
      <h1 className="mb-8 text-3xl font-bold text-center">
        Inputmask com Next.js
      </h1>

      <div className="grid gap-4 max-w-80 w-full mx-auto">
        <div>
          <label htmlFor="brlField">Campo para moeda</label>
          <BRLField id="brlField" />
        </div>

        <div>
          <label htmlFor="brlFieldWithPrefix">
            Campo para moeda (com prefixo)
          </label>
          <BRLField id="brlFieldWithPrefix" maskPrefix />
        </div>

        <div>
          <label htmlFor="cepField">Campo para CEP</label>
          <CEPField id="cepField" />
        </div>

        <div>
          <label htmlFor="cnpjField">Campo para CNPJ</label>
          <CNPJField id="cnpjField" />
        </div>

        <div>
          <label htmlFor="cpfField">Campo para CPF</label>
          <CPFField id="cpfField" />
        </div>

        <div>
          <label htmlFor="phoneField">
            Campo para telefone (celular e fixo)
          </label>
          <PhoneField id="phoneField" />
        </div>

        <div>
          <label htmlFor="landlinePhoneField">Campo para telefone fixo</label>
          <PhoneField id="landlinePhoneField" maskType="landline" />
        </div>

        <div>
          <label htmlFor="mobilePhoneField">Campo para celular</label>
          <PhoneField id="mobilePhoneField" maskType="mobile" />
        </div>
      </div>
    </main>
  );
}
