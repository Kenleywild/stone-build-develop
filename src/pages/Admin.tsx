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
      <header className="bg-background border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Site
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-semibold text-foreground">Lead Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                {leads.length} total lead{leads.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={fetchLeads} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
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
          <div className="grid gap-4">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-background rounded-lg border border-border p-5 md:p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  {/* Lead info */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-semibold text-foreground text-lg">{lead.name}</h3>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor(lead.status)}`}
                      >
                        {lead.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <a
                        href={`mailto:${encodeURIComponent(lead.email)}`}
                        className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        {lead.email}
                      </a>
                      <a
                        href={`tel:${lead.phone}`}
                        className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        {lead.phone}
                      </a>
                    </div>

                    {(lead.project_type || lead.budget) && (
                      <div className="flex gap-2 flex-wrap">
                        {lead.project_type && (
                          <Badge variant="secondary">{lead.project_type}</Badge>
                        )}
                        {lead.budget && <Badge variant="outline">{lead.budget}</Badge>}
                      </div>
                    )}

                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {lead.message}
                    </p>

                    <p className="text-xs text-muted-foreground/60">
                      {new Date(lead.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  {/* Status actions */}
                  <div className="flex gap-2 flex-wrap md:flex-col">
                    {["new", "contacted", "qualified", "closed"].map((s) => (
                      <Button
                        key={s}
                        variant={lead.status === s ? "default" : "outline"}
                        size="sm"
                        className="text-xs capitalize"
                        onClick={() => updateStatus(lead.id, s)}
                      >
                        {s}
                      </Button>
                    ))}
                  </div>
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
