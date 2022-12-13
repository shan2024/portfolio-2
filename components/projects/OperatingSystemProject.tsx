export default function OperatingSystemProject() {
  return (
    <div className="project">
      <div className="title">OS resources/notes</div>
      <div className="project-section">
        <div className="info">
          <ul>
            A collection of resources/notes for CSE 451: Operating Systems
            <br></br><br></br>
            <li><a href="http://pdos.csail.mit.edu/6.828/2014/xv6/book-rev8.pdf">xk6 overview</a>: xk is a simple monolithic operating system designed for teaching principles of operating systems.
            This just gives an overview of the basic implementation details, including virtual memory, context switching,
            and file system. Lots of code details.</li>
            <br></br>
            <li><a href="https://wiki.osdev.org/QEMU">Overview of QEMU</a>: QEMU is an emulator/virtual machine that can simulate x86-64 environment. Useful for running/testing OS virtually.</li>
            <br></br>
            <li><a href="https://wiki.osdev.org/Sysenter">Intel sysenter</a> for quick system calls: A quick overview of using sysenter to trap into the kernel.</li>
            <br></br>
            <li><a href="https://wiki.osdev.org/Paging#64-Bit_Paging">x86-64 page table format</a></li>
            <br></br>
            <li>basic global descriptor table <a href="https://wiki.osdev.org/GDT_Tutorial ">setup</a>: minimal setup of global descriptor table if only paging will be used for memory protection:</li>
            <br></br>
            <li>list of full <a href="https://docs.oracle.com/cd/E19048-01/chorus4/806-3328/6jcg1bm05/index.html">POSIX system calls</a>: also see man pages</li>
            <br></br>
            <li><a href="https://wiki.osdev.org/Exceptions#Page_Fault">list</a> of exception codes</li>
            <br></br>
            <li><a href="https://wiki.osdev.org/Exceptions#Page_Fault">list</a> of page fault error codes</li>
            <br></br>
            <li>OS class <a href="https://wiki.osdev.org/Sysenter">textbook</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}