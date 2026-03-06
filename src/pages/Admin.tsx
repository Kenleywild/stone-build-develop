import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  project_type: string | null;
  budget: string | null;
  message: string;
  status: string;
  created_at: string;
}

const Admin = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setLeads(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("leads").update({ status }).eq("id", id);
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );
  };

  const statusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "contacted":
        return "bg-yellow-100 text-yellow-800";
      case "qualified":
        return "bg-green-100 text-green-800";
      case "closed":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b border-border px-4 md:px-6 py-3 md:py-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm" className="px-2 md:px-3">
                <ArrowLeft className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Back to Site</span>
              </Button>
            </Link>
            <div className="text-center flex-1 mx-2">
              <h1 className="text-base md:text-xl font-semibold text-foreground">Lead Dashboard</h1>
              <p className="text-xs md:text-sm text-muted-foreground">
                {leads.length} lead{leads.length !== 1 ? "s" : ""}
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={fetchLeads} disabled={loading} className="px-2 md:px-3">
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              <span className="hidden md:inline ml-2">Refresh</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-3 md:px-6 py-4 md:py-8">
        {loading && leads.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">Loading leads...</div>
        ) : leads.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">No leads yet.</p>
            <p className="text-sm text-muted-foreground/70 mt-1">
              Submissions from the contact form will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-3 md:gap-4">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-background rounded-lg border border-border p-4 md:p-6"
              >
                {/* Name + Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-foreground text-base md:text-lg truncate">{lead.name}</h3>
                  <span
                    className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusColor(lead.status)}`}
                  >
                    {lead.status}
                  </span>
                </div>

                {/* Quick actions - call/email */}
                <div className="flex gap-3 mb-3">
                  <a
                    href={`tel:${lead.phone}`}
                    className="flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span className="truncate">{lead.phone}</span>
                  </a>
                  <a
                    href={`mailto:${encodeURIComponent(lead.email)}`}
                    className="flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span className="truncate">{lead.email}</span>
                  </a>
                </div>

                {/* Badges */}
                {(lead.project_type || lead.budget) && (
                  <div className="flex gap-1.5 flex-wrap mb-3">
                    {lead.project_type && (
                      <Badge variant="secondary" className="text-xs">{lead.project_type}</Badge>
                    )}
                    {lead.budget && <Badge variant="outline" className="text-xs">{lead.budget}</Badge>}
                  </div>
                )}

                {/* Message */}
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3">
                  {lead.message}
                </p>

                {/* Date */}
                <p className="text-xs text-muted-foreground/60 mb-3">
                  {new Date(lead.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </p>

                {/* Status buttons */}
                <div className="flex gap-1.5 flex-wrap border-t border-border pt-3">
                  {["new", "contacted", "qualified", "closed"].map((s) => (
                    <Button
                      key={s}
                      variant={lead.status === s ? "default" : "outline"}
                      size="sm"
                      className="text-xs capitalize h-7 px-2.5 md:h-8 md:px-3"
                      onClick={() => updateStatus(lead.id, s)}
                    >
                      {s}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
