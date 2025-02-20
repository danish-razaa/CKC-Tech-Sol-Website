import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/CKC.png?height=400&width=600"
            alt="CKC Tech-Solutions Team"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <p>
            CKC Tech-Solutions & Consultancy Pvt Ltd is a fastest growing Startup IT Solutions Provider. We can work
            with you to ensure the success of all of your business. CKC Tech-Solutions looks deeper into your business
            to find smarter IT solutions and clearer strategies for a better business model.
          </p>
          <p>
            Our engineers have a wide range of knowledge in regards to all aspects of Technology and will provide you
            with the solutions you need to be successful in your business. We are providing total System Integration
            Solution Compute and Storage Solution, Networking & Security Solution, Software Services, Data Center
            Solutions and Video Surveillance Solution according to the technical specifications of the project and user
            requirements.
          </p>
          <p>
            We have expertise in Backup, Data protecting, storage technologies, Disaster Recovery, Networking and HPC
            Solution etc.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">What We Do?</h2>
        <p className="mb-6">
          CKC Tech-Solutions is Startup IT System Integration Company. We help our clients to use technology platforms
          to deliver business results for their enterprise. We work as a strategic partner to help our clients enable IT
          to deliver results for their growth and success.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Solutions We Provide:</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Datacentre Build</li>
          <li>High-End Computing (HPC)</li>
          <li>Network Infrastructures</li>
          <li>Storage Solution</li>
          <li>Backup Solution</li>
          <li>Disaster Recovery</li>
          <li>System Integration</li>
          <li>Video Surveillance System</li>
        </ul>
      </div>
    </div>
  )
}

